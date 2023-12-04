import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGpt is a language model developed by OpenAI. It belongs to the GPT (Generative Pre-trained Transformer) family of models,  specifically based on the GPT-3 architecture. The chat in ChatGPT indicates its suitability for natural language understanding and generation in conversational contexts" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="A chatbot is a computer program designed to simulate conversation with human users, especially over the internet. Chatbots are often used in customer service, providing information, answering questions, and assisting users with various tasks. " />
      <Feature title="Knowledgebase" text="A knowledge base is a centralized repository that stores, organizes, and manages information. In the context of AI, knowledge bases can be leveraged to enhance the capabilities of language models." />
      <Feature title="Education" text="ChatGPT does not have a formal education in the way humans do. Instead, it undergoes a training process. The model is trained using a method called unsupervised learning on a diverse range of internet text." />
    </div>
  </div>
);

export default WhatGPT3;
