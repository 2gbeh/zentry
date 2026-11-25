- Startups
- Founding engineer 0->1

* Distributed systems

- Event-driven systems
- AI model eval (Rubic)
- High-volume data ingest
- AI workflow + example
- AI future skill (Rubic)
- Other interviews

* Why Us

- Next role

* Compensation

- Questions
- Remarks
- Ownership
- Production monitoring
- Technical decisions
- Multi-tenant
- Complexity
- Compliance (PII, PCI DSS, SOC 2 Type II, HIPAA, PHI)

# Kalepa Q&A

## Can you describe a high-complexity distributed system you architected from the ground up?

Sure, as part of my contract at Uber,
I architected a natural-language analytics AI assistant from scratch.

- I developed the APIs using Python (FastAPI framework)
- and, handled the integration on the FE, using React with TypeScript
- This was deployed on an AWS EC2 instance, and handled up to 70% of ad-hoc data requests for our internal Payments & Risk Analyst team.

> And this greatly improved risk scoring and verification process by 45%

```sh
- React → FastAPI →
- LLM Analytics Agent (LangGraph w/OpenAI, Anthropic)
- Custom SQL Engine
- Redis/cache
- Database (Postgres)
- Object storage/logging/monitoring (AWS S3)
- Results → Chart/Table (Recharts, Apache ECharts)
```

### What were the primary bottlenecks and how did you overcome them?

There were several bottlenecks in building a distributed system like this, particularly around scoping and timelines (6-12 weeks);

But from any engineering stand point, some primary bottlenecks were;

- Slow LLM responses:
- - I impl streaming on the FE (useStreaming, AbortController) and BE (StreamingResponse from fastapi.responses, sync & Server-Sent Events SSE)
- - I cached frequent queries with Redis, impl paginated results and lazy loading (Suspense).

- Heavy queries on the database:
- - I enforced row limits and timeouts, and leveraged PostgreSQL read replicas to protect performance load.

- Inaccurate SQL generation:
- - I added validation steps to the Custom SQL Engine that rejected unsafe or malformed queries before execution

## How do you approach benchmarking and back-testing when deploying changes to business-critical data pipelines?

**Benchmarking (is the new version fast and cheap enough?):**

- **Baseline:** I captured production latency, throughput, and cost per query before the change.
- **Load test:** I ran the new pipeline against the same synthetic and replayed traffic in staging and compared metrics side by side.
- **Gate:** I set pass/fail thresholds (for example, p95 latency no worse than +5%) in the Continuous Integration and Continuous Deployment (CI/CD) pipeline.

**Back-testing (is the new version still correct?):**

- **Replay history:** I fed real historical questions and data through the new pipeline in staging.
- **Diff outputs:** I compared the generated Structured Query Language (SQL) and results against a golden set of verified answers and the current version's outputs.
- **Accuracy threshold:** I only proceeded when the mismatch rate stayed under an agreed limit, then moved to shadow mode and a canary rollout.

#### Example

At Cognizant, when I changed our media-activity transformation logic,

- I replayed a week of historical logs through both the old and new Python ETL versions,
- and the row-by-row diff in PostgreSQL exposed duplicate user sessions caused by a timestamp timezone mismatch,
- so I fixed it and re-ran the comparison until the outputs matched before shadow-deploying through Jenkins.

## Tell me about a time you had to take end-to-end ownership of a fragmented, high-value dataset. How did you ensure data reliability and system observability?

At Scribe, I took E2E ownership of structured high-value dataset by;

- I built data pipelines to clean, normalize and enrich the data before it reached the models

- I Ensured reliability with failure handling for malformed outputs

- I leveraged Grafana dashboards for observability, tracking KPIs like;
- - accuracy, latency, token usage and cost per request

#### AI-Powered Guide Generation

Situation: Users recorded their workflows as raw action logs, but turning that raw data into a clear, structured how-to guide required significant manual editing.

Task: I needed to lead the backend effort to convert unstructured user action data into polished, searchable process guides automatically.

Action: I built Node.js/TypeScript services to structure raw activity into steps, summaries, and metadata, then integrated LLM workflows to auto-generate titles, step descriptions, and summaries, exposing the output through GraphQL APIs consumed by the editor and search UI.

Result: This significantly cut the manual effort needed to produce guides, improved discoverability through added embedding-based search, and let the product team iterate quickly using real user feedback.

## Job Perks

- AI UseCase: The underwriting OS for SMB lending.
- Ownership
- FDE: intersection of engineering, product, and customers
- Experience with Python, React, or
- Experience with LLMs, RAG, AI agents, or production AI systems.
#### Others

- The infras connecting employers, benefits admins, insurance carriers, and service provider
- Benefits Intelligence powered by Alight Data Engine
- Substantial ownership of  technical design, archi, and impl of the Data Engine
- Extensive Python engineering skills
- Deep knowledge of data modeling, SQL
- Experience optimizing AWS cloud infrastructure

- AI agents and human judgement
- - Augment the work of legal professionals rather than replace them
- Experience with RAG systems and LLM evaluation.
- Familiarity with legal domain or legal text processing.
- Opportunity to take ownership and impact with real-world outcomes
- TypeScript (Python, AWS, Postgres)

## Compensation

- My target is between 140-160k per annum
- I'm flexible, anywhere within that range is a sweet spot for me

## Scribe - AI-Powered Guide Generation

Situation: Users recorded their workflows as raw action logs, but turning that raw data into a clear, structured how-to guide required significant manual editing.

Task: I needed to lead the backend effort to convert unstructured user action data into polished, searchable process guides automatically.

Action: I built Node.js/TypeScript services to structure raw activity into steps, summaries, and metadata, then integrated LLM workflows to auto-generate titles, step descriptions, and summaries, exposing the output through GraphQL APIs consumed by the editor and search UI.

Result: This significantly cut the manual effort needed to produce guides, improved discoverability through added embedding-based search, and let the product team iterate quickly using real user feedback.

## Cognizant- ETL and Early ML Data Pipeline

Situation: The client analytics platform needed clean, structured data from media and user activity logs to support internal reporting and early machine learning experiments.

Task: I was tasked with building the backend and data pipelines to support this, including reliable data ingestion and preparation for ML use.

Action: I helped build FastAPI services to expose data for reporting, wrote Python ETL scripts to clean and load data into AWS RDS, and worked on REST APIs with attention to authentication, request validation, and performance, deploying through AWS CodePipeline and Elastic Beanstalk.

Result: The client analytics platform gained a reliable data foundation that supported both internal reporting needs and early-stage ML experimentation.

## AI Model Eval (Rubic Scoring)

- Correctness (1-5): 5 means it passes all tests and handles edge cases

- Security (1-5): 5 means no injection, secrets, or unsafe input handling

- Readability (1-5): 5 means clear names, small functions, and useful comments

- Maintainability (1-5): 5 means low duplication and follows project conventions

- Test coverage (pass/fail): pass means new logic has tests

## Scribe | Legal | Real-estate Lease Contract Review Automation Tool

- **Situation:** Real estate agents and lawyers spent hours manually searching long contracts for clauses like payment terms, termination, and penalties.

- **Action:** 

- I used RAG technique to split contracts into chunks and  converted them to embeddings in a vector database.

- And leveraged [Python OCR] packages (pytesseract, pdf2image) and [OpenAI NLP] API to flag contract clauses, liability caps, and citations for human review. 

- Also Integrated with Google Drive and Microsoft SharePoint for document intake.

- **Result:** Significantly reduced time spent on contract reviews from days to minutes;


