I started this blog, and this site as a whole not just to show off projects or list out skills for a resume, but to give myself a space to think out loud, document my ideas, and clarify topics not only for others, but myself.

Take machine learning, for example: it's one of the most talked-about technologies today, yet most people outside the field see it as a black box. By writing about it, I'm forcing myself to explain complex ideas in simple terms. If I can't teach it clearly, then I don't understand it well enough.

This applies beyond just machine learning. Whether I'm writing about code, design, data, or anything else I may be working on, the goal is to find a happy medium between technical depth and clarity.

If you're someone who's curious or just trying to learn something new, then I hope you find some interest in my posts and I would appreciate any [feedback](../contact) you may have. So with that in mind, let's start at the beginning: What exactly _is_ machine learning, and _why_ does it matter?

# What is Machine Learning?

The primary goal of **machine learning** is to teach a computer how to learn from experience and improve its performance over time without being explicitly programmed with rules.

Let’s say we want to determine whether an email is **spam** or **not spam**. As humans, we can easily tell the difference based on context clues like seeing phrases such as “You’ve won!” or noticing suspicious links.

Now imagine trying to program a computer to do the same thing using hand-crafted rules:

- If the subject contains “prize” → mark as spam
- If the sender is unknown → mark as spam
- If the body has too many exclamation marks → mark as spam

This becomes tedious, fragile, and almost impossible to scale for the variety of spam emails out there.

This is where machine learning comes in. Instead of hardcoding rules, we **show the computer many examples of spam and not-spam emails**, and it **learns patterns** from the data to make predictions.

# Types of Machine Learning

Machine learning isn’t a single tool, it’s a **toolbox of techniques**, and each one is best suited for specific types of problems.

To solve our spam email example, we're trying to **classify** a new email into one of two categories: _spam_ or _not spam_. This is a **binary classification** task, one of the most common types of problems in machine learning.

Depending on the kind of data we have, we can apply different types of learning techniques.

![Machine Learning Map](/blog-images/machine-learning-overview/map.png)
[Image Credit](https://vitalflux.com/great-mind-maps-for-learning-machine-learning/)

## Supervised Learning

In **supervised learning**, we provide the model with labeled examples, that is, inputs paired with the correct output (label). The model makes predictions and we compare them with the correct answers to guide its learning.

| Task Type                 | Description                          | Example                             |
| ------------------------- | ------------------------------------ | ----------------------------------- |
| Binary Classification     | Predict one of two possible labels   | Credit card approval (yes / no)     |
| Multiclass Classification | Predict one of many possible labels  | Handwritten digit recognition (0–9) |
| Regression                | Predict a continuous numerical value | House price prediction              |

## Unsupervised Learning

In **unsupervised learning**, the data has no labels. The model tries to discover hidden patterns or groupings in the data all on its own.

| Task Type                | Description                         | Example                     |
| ------------------------ | ----------------------------------- | --------------------------- |
| Clustering               | Group similar examples together     | Music recommendations       |
| Dimensionality Reduction | Reduce the number of input features | Data visualization (PCA)    |
| Anomaly Detection        | Detect outliers or rare events      | Credit card fraud detection |

## Reinforcement Learning

In **reinforcement learning**, an agent learns by recieving rewards or penalties for its actions. The agent makes decisions based on its environment and updates it's decision making policies based on the result of its actions. This is an iterative process and the agent learns through trial and error.

# How Does the Model "Learn"?

Let’s go back to our spam email example.

We provide the model with a training dataset containing many emails. Each email has:

- **Features** — such as the sender, subject, or the number of links in the body
- **Label** — whether it is spam or not

The model takes in these features and tries to **predict the label** (spam or not). At first, it might make poor predictions, but with each example, it adjusts itself to minimize the number of mistakes.

This process is called **training**, and it's similar to how we learn from trial and error.

### A Simple Analogy

Imagine trying to throw a basketball into a hoop blindfolded. You take a shot and miss. A friend tells you how far off you were. You adjust and try again. Eventually, your aim gets better. That’s what the model does: **trial, error, correction**, until it's good enough.

# The Machine Learning Workflow

A typical ML process looks like this:

1. **Collect Data** – e.g., thousands of emails with spam labels
2. **Prepare the Data** – clean up, normalize, and extract features
3. **Train a Model** – feed the data into a machine learning algorithm
4. **Evaluate the Model** – check how accurate its predictions are
5. **Make Predictions** – use the model on new, unseen data
6. **Improve & Tune** – iterate and optimize the model further

This process can be repeated many times to get better results.

![Machine Learning Flow](/blog-images/machine-learning-overview/flow.png)

# Why Should You Care?

Machine learning is not just for data scientists or engineers. It’s a foundational technology shaping modern life. Understanding how it works, even at a high level, makes you a better communicator, thinker, and decision-maker in a world increasingly powered by AI. Whether you're a student, a marketer, or a developer, learning the basics opens the door to opportunities in business, research, and innovation.

# What's Next?

In future posts, I’ll break down:

- How machine learning models are built
- The key algorithms
- How to evaluate and improve model performance
- And how you can build your own ML project

I'll do my best to keep the math to a minimum, but if you're curious about how these models work under the hood, a basic understanding of linear algebra and calculus can be really helpful. If you would like a quick refresher I have written a [seperate post](/blog/math-review) that walks through the core concepts and math used in machine learning.

Follow me here or on [LinkedIn](https://www.linkedin.com/in/noah-roberts-3bb399234/) to stay updated as I publish more!
