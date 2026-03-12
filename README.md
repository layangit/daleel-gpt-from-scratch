# دليل | Daleel
دليلك للمعرفة!
Website Link: https://layangit.github.io/daleel-gpt-from-scratch/
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
Saudi Arabia anounces that 2026 is the year of AI. Artificial intelligence is becoming part of the future of education, business, and digital transformation.  
The idea behind **Daleel** is to help Arabic-speaking users understand important AI concepts in a clear and accessible way.

Instead of trying to answer every possible question, the project focuses on a **narrow educational scope**, which is more realistic for a small model trained from scratch on limited local resources.

---

## Data Summary

### Pretraining Data
The pretraining stage used a subset of **ArabicWeb24** (`lightonai/ArabicWeb24`) converted into raw Arabic text and saved in:

```text
data/pretrain/data.txt
```

This data was used to teach the model general Arabic language patterns and next-token prediction.

### Fine-tuning Data
The fine-tuning stage used Arabic instruction-response pairs saved in:

```text
data/finetune/instruction-data.json
```

The fine-tuning data followed this format:

```json
{
  "instruction": "ما هو الذكاء الاصطناعي؟",
  "input": "",
  "output": "الذكاء الاصطناعي هو مجال..."
}
```

The dataset focused on:
- الذكاء الاصطناعي
- تعلم الآلة
- التعلم العميق
- البيانات
- النماذج اللغوية
- التعليم والأعمال
- سدايا
- رؤية 2030
- عام الذكاء الاصطناعي 2026

---

## Model Architecture
The project uses a **decoder-only Transformer** implemented from scratch in PyTorch.

Main components:
- token embedding
- positional embedding
- multi-head self-attention
- feed-forward network
- layer normalization
- autoregressive text generation

The model was intentionally kept compact so it could be trained locally.

---

## Training Pipeline

### 1. Skeleton
First, the GPT-style Transformer model was implemented from scratch.

### 2. Pretraining
The model was pretrained on Arabic raw text using next-token prediction.

### 3. Fine-tuning
The pretrained model was then fine-tuned on Arabic question-answer style instruction data so it could behave more like an educational assistant.

---

# Demo Requirements

## 1. Introduction

### Project Overview
Daleel is a small Arabic GPT-style model trained from scratch to explain AI and technology concepts in simple Arabic.

### Data Summary
- **Pretraining data:** Arabic raw text corpus in `data/pretrain/data.txt`
- **Fine-tuning data:** Arabic instruction-response pairs in `data/finetune/instruction-data.json`

---

## 2. Pre-trained Model Demo

Before fine-tuning, the model was tested using instruction-style prompts to observe its general Arabic generation ability.

### Example 1
**Question:** لماذا جودة البيانات مهمة؟  
**Model Output:**

```text
السؤال: لماذا جودة البيانات مهمة؟
الجواب: التي تعمل الجديدة البيانات الحرة الذكاء الذكاء الذكاء المنظمة الذكية الذكاء. ولكن تعمل البيانات
```

**Observation:**  
The pretrained model shows partial Arabic structure and some topic-related vocabulary such as "البيانات" and "الذكاء"، but the answer is repetitive and not fully coherent.

### Example 2
**Question:** كيف يساعد الذكاء الاصطناعي في التعليم؟  
**Model Output:**

```text
السؤال: كيف يساعد الذكاء الاصطناعي في التعليم؟
الجواب: المنتجات العالم السياقي يمكن أنه يمكن تنظيف العمل الذكاء والتعمل على الاصطناعين. وي
```

**Observation:**  
The model captures some general educational and AI-related wording, but the output remains unstable and incomplete.

### Example 3
**Question:** كيف يساعد الذكاء الاصطناعي في الأعمال؟  
**Model Output:**

```text
السؤال: كيف يساعد الذكاء الاصطناعي في الأعمال؟
الجواب: المنتج الفكرة الجزئيسي للأنه يمكن أنه يحترك الأنظمة الذكاء الاصطناعية النموعية ال
```

**Observation:**  
The pretrained model shows that it has learned Arabic token patterns and some domain words, but it still lacks control, fluency, and clear task alignment.

### Strengths of the Pre-trained Model
- learned some Arabic word patterns
- generated topic-related vocabulary
- showed improvement over random initialization
- captured partial sentence structure

### Weaknesses of the Pre-trained Model
- repetition
- incomplete words and phrases
- weak semantic coherence
- poor direct question answering
- limited usefulness for end users

---

## 3. Fine-tuned Model Demo

After fine-tuning, the model became more aligned with the target task: **Arabic explanation of AI concepts**.

### Task 1 Demonstration: Concept Explanation

#### Before Fine-tuning
**Question:** ما هو الذكاء الاصطناعي؟  
**Output:**  
The model produced unstable and repetitive Arabic-like continuation without a clear educational explanation.

#### After Fine-tuning
**Question:** ما هو الذكاء الاصطناعي؟  
**Output:**  
الذكاء الاصطناعي هو مجال في علوم الحاسوب يهدف إلى تطوير أنظمة تستطيع تنفيذ مهام تحتاج عادة إلى قدر من الذكاء البشري، مثل فهم اللغة وتحليل البيانات واتخاذ قرارات بسيطة، لكنه لا يفهم دائما بنفس طريقة الإنسان.
**Observation:**  
The fine-tuned model became much closer to the intended educational style and produced a direct definition instead of random continuation.

### Task 2 Demonstration: Practical Use Cases

#### Before Fine-tuning
**Question:** كيف يساعد الذكاء الاصطناعي في التعليم؟  
**Output:**  
The model generated weak and fragmented language that did not clearly answer the question.

#### After Fine-tuning
**Question:** كيف يساعد الذكاء الاصطناعي في التعليم؟  
**Output:**  
يمكن أن يساعد الذكاء الاصطناعي في التعليم من خلال تبسيط الشرح، وتقديم أمثلة إضافية، وتلخيص المحتوى، ومساعدة المتعلم على فهم المفاهيم بشكل أوضح. لكن مع ذلك، ما يزال يحتاج إلى مراجعة بشرية، وقد لا تكون كل الإجابات دقيقة بشكل كامل.
**Observation:**  
The model became more task-aware and better at producing useful educational responses, although the answers are still limited in depth.

### Additional Fine-tuned Example
**Question:** ما هو تعلم الآلة؟  
**Output:**  
تعلم الآلة هو فرع من الذكاء الاصطناعي يجعل الحاسوب يتعلم من البيانات، بدل من الاعتماد فقط على قواعد مكتوبة مسبقا. وكلما رأى النموذج بيانات أكثر، صار أقدر على التوقع أو التصنيف، لكن ما يزال يعتمد على نوع البيانات وجودتها بشكل كبير.
**Observation:**  
This shows a clearer answer structure and stronger alignment with the fine-tuning objective.

---

## 4. Evaluation Results

### Key Metrics
The model was evaluated using:
- training loss
- validation loss
- perplexity
- sample generations
- qualitative error analysis

### General Findings
- pretraining improved Arabic generation compared to random initialization
- fine-tuning improved prompt alignment and concept explanation
- the model works better on direct concept questions than on broad open-ended prompts

### Sample Generation Summary
The model was tested on prompts related to:
- AI concepts
- data quality
- education use cases
- business use cases

The fine-tuned model showed stronger control and more understandable output than the pretrained model.

### Error Analysis Highlights
Main issues observed:
- repetition of words and phrases
- shallow answers in some cases
- limited factual depth
- weaker performance on broader or unseen questions
- stronger performance on narrow educational prompts

### Interpretation
These results are expected because the model is:
- small
- trained locally
- built from scratch
- working in Arabic under limited compute and time

---

## 5. Conclusion

### Key Learnings
This project showed that:
- a GPT-style model can be implemented from scratch in PyTorch
- pretraining improves basic Arabic generation ability
- fine-tuning improves task alignment and answer quality
- narrowing the scope is very important for a small model
- deployment and user experience are important parts of presenting an AI project

### Future Work
Possible future improvements include:
- using a stronger Arabic tokenizer
- training for longer
- expanding and cleaning the fine-tuning dataset
- improving model size and checkpoint selection
- adding retrieval or search support
- improving evaluation with more human review

---

## Public Demo
A public chatbot-style demo website was created for the project.

The website:
- presents Daleel as an Arabic AI explainer
- uses a dark premium interface
- supports fixed recommended questions
- provides a simple and clear user experience

For the public demo, recommended questions use curated responses to make the educational experience more reliable, while the model itself is still presented as an experimental prototype.

---

## Project Structure

```text
gpt-from-scratch/
├── data/
│   ├── pretrain/
│   │   └── data.txt
│   └── finetune/
│       ├── instruction-data.json
│       ├── story_completion/
│       └── poetry/
├── src/
│   ├── demo/
│   │   └── static/
├── checkpoints/
│   ├── pretrained/
│   └── finetuned/
├── results/
│   ├── sample_generations/
│   └── plots/
├── demo/
│   ├── recording/
│   ├── screenshots/
│   └── site/
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       └── static/
│           └── demo_qa.json
├── docs/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── static/
│       └── demo_qa.json
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   └── 02_evaluation.ipynb
├── requirements.txt
└── README.md
```

---

## How to Run

### Training
Run the notebook or scripts for:
- model setup
- pretraining
- fine-tuning
- evaluation

### Local Demo Website
From the `docs` folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### GitHub Pages Deployment
The public website is deployed from the `docs/` folder using GitHub Pages.

---

## Limitations
Daleel is a small experimental Arabic model trained from scratch on limited local resources.

It works best for:
- direct concept questions
- beginner-friendly AI explanations
- narrow educational prompts

It is less reliable for:
- broad open-ended questions
- highly technical reasoning
- fully accurate factual answering in all cases

---

## Final Note
Daleel is an educational Arabic AI project that combines:
- model building from scratch
- Arabic text generation
- fine-tuning
- evaluation
- web deployment

The project highlights both the promise and the limitations of small generative models built under limited resources.
