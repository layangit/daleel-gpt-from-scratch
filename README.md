# دليل | Daleel
## Arabic GPT From Scratch for Explaining AI Concepts

## Project Overview
**Daleel** is a small Arabic generative AI project built from scratch using a GPT-style Transformer in PyTorch.  
The goal of the project is to create an Arabic educational assistant that explains core AI and technology concepts in simple and beginner-friendly Arabic.

The project was developed as a full pipeline that includes:
- model skeleton and architecture implementation
- pretraining
- fine-tuning
- evaluation
- public demo deployment

The final version of Daleel focuses on **explaining AI and technology concepts in Arabic** through a clean chatbot-style interface.

---

## Project Idea
Artificial intelligence is becoming part of the future of education, business, and digital transformation.  
The idea behind **Daleel** is to help Arabic-speaking users understand important AI concepts in a clear and accessible way.

Instead of trying to answer every possible question, the project focuses on a **narrow educational scope**, which is more realistic for a small model trained from scratch on limited local resources.

---

## Data Summary

### Pretraining Data
The pretraining stage used Arabic raw text saved in:


data/pretrain/data.txt
This data was used to teach the model general Arabic language patterns and next-token prediction. Its a subset of ArabicWeb24 (lightonai/ArabicWeb24) converted into a raw UTF-8 Arabic text file.

Fine-tuning Data

The fine-tuning stage used Arabic instruction-response pairs saved in:

data/finetune/instruction-data.json

The fine-tuning data followed this format:

{
  "instruction": "ما هو الذكاء الاصطناعي؟",
  "input": "",
  "output": "الذكاء الاصطناعي هو مجال..."
}

The dataset focused on:

الذكاء الاصطناعي

تعلم الآلة

التعلم العميق

البيانات

النماذج اللغوية

التعليم والأعمال

سدايا

رؤية 2030

عام الذكاء الاصطناعي 2026
---

## Model Architecture

The project uses a decoder-only Transformer implemented from scratch in PyTorch.

Main components:

token embedding

positional embedding

multi-head self-attention

feed-forward network

layer normalization

autoregressive text generation

The model was intentionally kept compact so it could be trained locally.

---

## Training Pipeline
1. Skeleton

First, the GPT-style Transformer model was implemented from scratch.

2. Pretraining

The model was pretrained on Arabic raw text using next-token prediction.

3. Fine-tuning

The pretrained model was then fine-tuned on Arabic question-answer style instruction data so it could behave more like an educational assistant.

---

## Demo Requirements
1. Introduction
Project overview

Daleel is a small Arabic GPT-style model trained from scratch to explain AI and technology concepts in simple Arabic.

Data summary

Pretraining data: Arabic raw text corpus in data/pretrain/data.txt

Fine-tuning data: Arabic instruction-response pairs in data/finetune/instruction-data.json

2. Pre-trained Model Demo

Before fine-tuning, the model was tested using instruction-style prompts to observe its general Arabic generation ability.

Example 1

QUESTION: لماذا جودة البيانات مهمة؟
MODEL OUTPUT:
السؤال: لماذا جودة البيانات مهمة؟
الجواب: التي تعمل الجديدة البيانات الحرة الذكاء الذكاء الذكاء المنظمة الذكية الذكاء. ولكن تعمل البيانات

Observation:
The pretrained model shows partial Arabic structure and some topic-related vocabulary such as "البيانات" and "الذكاء"، but the answer is repetitive and not fully coherent.

Example 2

QUESTION: كيف يساعد الذكاء الاصطناعي في التعليم؟
MODEL OUTPUT:
السؤال: كيف يساعد الذكاء الاصطناعي في التعليم؟
الجواب: المنتجات العالم السياقي يمكن أنه يمكن تنظيف العمل الذكاء والتعمل على الاصطناعين. وي

Observation:
The model captures some general educational and AI-related wording, but the output remains unstable and incomplete.

Example 3

QUESTION: كيف يساعد الذكاء الاصطناعي في الأعمال؟
MODEL OUTPUT:
السؤال: كيف يساعد الذكاء الاصطناعي في الأعمال؟
الجواب: المنتج الفكرة الجزئيسي للأنه يمكن أنه يحترك الأنظمة الذكاء الاصطناعية النموعية ال

Observation:
The pretrained model shows that it has learned Arabic token patterns and some domain words, but it still lacks control, fluency, and clear task alignment.

Strengths of the Pre-trained Model

learned some Arabic word patterns

generated topic-related vocabulary

showed improvement over random initialization

captured partial sentence structure

Weaknesses of the Pre-trained Model

repetition

incomplete words and phrases

weak semantic coherence

poor direct question answering

limited usefulness for end users

3. Fine-tuned Model Demo

After fine-tuning, the model became more aligned with the target task: Arabic explanation of AI concepts.

Task 1 Demonstration: Concept Explanation
Example Before Fine-tuning

QUESTION: ما هو الذكاء الاصطناعي؟
Before:
The model produced unstable and repetitive Arabic-like continuation without a clear educational explanation.

Example After Fine-tuning

QUESTION: ما هو الذكاء الاصطناعي؟
After:
الذكاء الاصطناعي هو مجال في علوم الحاسوب يهدف إلى تطوير أنظمة تستطيع تنفيذ مهام تحتاج عادة إلى قدر من الذكاء البشري، مثل فهم اللغة وتحليل البيانات واتخاذ قرارات بسيطة.

Observation:
The fine-tuned model became much closer to the intended educational style and produced a direct definition instead of random continuation.

Task 2 Demonstration: Practical Use Cases
Example Before Fine-tuning

QUESTION: كيف يساعد الذكاء الاصطناعي في التعليم؟
Before:
The model generated weak and fragmented language that did not clearly answer the question.

Example After Fine-tuning

QUESTION: كيف يساعد الذكاء الاصطناعي في التعليم؟
After:
يمكن أن يساعد الذكاء الاصطناعي في التعليم من خلال تبسيط الشرح، وتقديم أمثلة إضافية، وتلخيص المحتوى، ومساعدة المتعلم على فهم المفاهيم بشكل أوضح. ومع ذلك، ما زال يحتاج إلى مراجعة بشرية.

Observation:
The model became more task-aware and better at producing useful educational responses, although the answers are still limited in depth.

Additional Fine-tuned Example

QUESTION: ما هو تعلم الآلة؟
After:
تعلم الآلة هو فرع من الذكاء الاصطناعي يجعل الحاسوب يتعلم من البيانات بدلا من الاعتماد فقط على قواعد مكتوبة مسبقا. وكلما رأى النموذج بيانات أكثر، أصبح أقدر على التوقع أو التصنيف.

Observation:
This shows a clearer answer structure and stronger alignment with the fine-tuning objective.

4. Evaluation Results
Key Metrics

The model was evaluated using:

training loss

validation loss

perplexity

sample generations

qualitative error analysis

General Findings

pretraining improved Arabic generation compared to random initialization

fine-tuning improved prompt alignment and concept explanation

the model works better on direct concept questions than on broad open-ended prompts

Sample Generation Summary

The model was tested on prompts related to:

AI concepts

data quality

education use cases

business use cases

The fine-tuned model showed stronger control and more understandable output than the pretrained model.

Error Analysis Highlights

Main issues observed:

repetition of words and phrases

shallow answers in some cases

limited factual depth

weaker performance on broader or unseen questions

stronger performance on narrow educational prompts

Interpretation

These results are expected because the model is:

small

trained locally

built from scratch

working in Arabic under limited compute and time

5. Conclusion
Key Learnings

This project showed that:

a GPT-style model can be implemented from scratch in PyTorch

pretraining improves basic Arabic generation ability

fine-tuning improves task alignment and answer quality

narrowing the scope is very important for a small model

deployment and user experience are important parts of presenting an AI project

Future Work

Possible future improvements include:

using a stronger Arabic tokenizer

training for longer

expanding and cleaning the fine-tuning dataset

improving model size and checkpoint selection

adding retrieval or search support

improving evaluation with more human review

Public Demo
A public chatbot-style demo website was created for the project.

The website:

presents Daleel as an Arabic AI explainer

uses a dark premium interface

supports fixed recommended questions

provides a simple and clear user experience
