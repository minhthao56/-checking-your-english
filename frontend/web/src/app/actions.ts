'use server'

import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
// import { Document } from "@langchain/core/documents";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

const apiKey = process.env.GOOGLE_API_KEY;
const chatModel = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
    apiKey
});
export async function invokeLLM() {
    const loader = new CheerioWebBaseLoader(
        "https://docs.smith.langchain.com/user_guide"
      );
      
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

      const prompt =
      ChatPromptTemplate.fromTemplate(`Answer the following question based only on the provided context:
    
        <context>
        {context}
        </context>
        
    Question: {input}`);
        
    const documentChain = await createStuffDocumentsChain({
    llm: chatModel,
    prompt,
    });

    // await documentChain.invoke({
    //     input: "what is LangSmith?",
    //     context: [
    //         new Document({
    //         pageContent:
    //             "LangSmith is a platform for building production-grade LLM applications.",
    //         }),
    //     ],
    // });

    //   const retriever = vectorstore.asRetriever();

    //   const retrievalChain = await createRetrievalChain({
    //     combineDocsChain: documentChain,
    //     retriever,
    //   });


    const retriever = vectorstore.asRetriever();

    const retrievalChain = await createRetrievalChain({
    combineDocsChain: documentChain,
    retriever,
    });
    const result = await retrievalChain.invoke({
        input: "what is LangSmith?",
      });

    console.log({result});

    return result.answer;
}