---
title: March Madness Predictions
kind: Machine learning
summary: Five classifiers compared by simulating full NCAA tournament brackets, 2012–2025.
stack: [Python, scikit-learn, Web scraping]
order: 2
image: ../../assets/projects/march-madness.png
imageAlt: Simulated NCAA tournament bracket produced from model predictions
links:
  - { label: Slides, href: "https://docs.google.com/presentation/d/1G7-xcGmo5TE4j4LUpBRWjps8SdhHVABz0wmel8HrIao/edit?usp=sharing" }
  - { label: Source, href: "https://github.com/noahnkr/mlmm" }
---

This project predicts NCAA March Madness outcomes using historical tournament data and machine learning. I collected tournament matchups from 2012 to 2025 (excluding 2020) and combined them with advanced and basic team statistics from several sources, writing custom Python scrapers to automate the collection.

After consolidating and cleaning the datasets, I engineered features capturing performance metrics, historical trends, and seeding differences. These features were used to train and evaluate several classifiers, including logistic regression, SVM, random forests, KNN, and naive Bayes, to compare their predictive accuracy.

To test real-world usefulness, I simulated entire tournament brackets year by year from the model outputs. This exposed the strengths and limits of each algorithm and showed how important it is to balance accuracy against variance in the predictions. It was also a chance to build and validate machine learning pipelines by hand, from preprocessing to evaluation, without leaning heavily on libraries.
