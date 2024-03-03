'use server'

import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
// import { Document } from "@langchain/core/documents";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import loader from "@/utils/loader";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import fs from "node:fs/promises";

import {
    RunnableLambda,
    RunnableMap,
    RunnablePassthrough,
  } from "@langchain/core/runnables";

import { StringOutputParser } from "@langchain/core/output_parsers";
import { formatDocumentsAsString } from "langchain/util/document";

const apiKey = process.env.GOOGLE_API_KEY;
const chatModel = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro-vision",
    maxOutputTokens: 2048,
    apiKey
});

export async function invokeLLM() {
    const docs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter();

    const splitDocs = await splitter.splitDocuments(docs);
    console.log(splitDocs.length);
    console.log(splitDocs[0].pageContent.length);

    const embeddings = new GoogleGenerativeAIEmbeddings({
        apiKey
    });
    const vectorstore = await MemoryVectorStore.fromDocuments(
        splitDocs,
        embeddings
    );


    // const prompt = ChatPromptTemplate.fromTemplate(`
    //     More information on the provided context:
    //         <context>
    //         {context}
    //         </context>
    //     Question: {input}`
    // );



    // const documentChain = await createStuffDocumentsChain({
    //     llm: chatModel,
    //     prompt,
    // });

    const retriever = vectorstore.asRetriever();
    const question = "what is TOEIC Writing?";
    const context = await retriever.invoke("Evaluate toeic writing");

    const allDocs = formatDocumentsAsString(context);
    console.log({allDocs});

    // const hotdogImage = await fs.readFile("public/TOEIC-writing-2.jpg");
    // const base64Image = hotdogImage.toString("base64");
    // const langchainLogoMessage = new HumanMessage({
    //     content: [
    //         {
    //             type: "text",
    //             text:  `Only answer base the provided context: ${context[0].pageContent}`,
    //         },
    //         {
    //             type: "image_url",
    //             image_url: `data:image/jpeg;base64,${base64Image}`,
    //         },
    //         {
    //             type: "text",
    //             text: `Question: ${question}`,
    //         },
    //     ],
    // });

    // const input = [
    //     langchainLogoMessage,
    // ];

    // const result = await chatModel.invoke(input);
    // console.log({result});







    // const input2 = [
    //     langchainLogoMessage,
    // ];

    // const outputParser = new StringOutputParser();

    // // const chain = RunnableSequence.from([langchainLogoMessage, chatModel, outputParser]);

    // const result = await chatModel.invoke(chat);






    // const retrievalChain = await createRetrievalChain({
    //     combineDocsChain: documentChain,
    //     retriever,
    // });

    // const result = await retrievalChain.invoke({
    //     input: "what is TOEIC Writing?",
    //   });

    // console.log({result: result.context});
    return "done";
}


export async function invokeLLMWithImage() {
    const hotdogImage = await fs.readFile("public/TOEIC-writing-2.jpg");
    // Convert the image to base64
    const base64Image = hotdogImage.toString("base64");


    const langchainLogoMessage = new HumanMessage({
        content: [
            {
                type: "text",
                text: `This is a picture of TOEIC Writing`,
            },
            {
                type: "image_url",
                image_url: `data:image/jpeg;base64,${base64Image}`,
            },{
                type: "text",
                text: `Key words: together, table`,
            },
            {
                type: "text",
                text: `My answer is: There is two people sit at a table together`,
            },
            {
                type: "text",
                text: `My answer is correct? Please check grammar and vocabulary for me.
                Explain detail and give me connect answer!
                
                `,
            }
        ],
    });

    const input = [
        langchainLogoMessage,
    ];

    const result = await chatModel.invoke(input);
    console.log({ result });

}