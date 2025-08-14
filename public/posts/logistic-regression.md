_This post builds off the ideas and notation introuced in the following two posts:_

- [How Linear Regression Works (and Why it's the Foundation of Machine Learning)](/blog/linear-regression)
- [From Lines to Layers: The Linear Perceptron and the Rise of Neural Networks](/blog/linear-perceptron)

<br></br>

At their core, **logistic regression** and other classifiers like the [linear perceptron](/blog/linear-perceptron) share the same fundamental goal: assign a class to a set of data points. At first glance, they seem almost identical. Both draw a **decision boundary** to separate points and compute a weighted sum of inputs to make predictions. Where they differ is _how_ they produce those predictions.

The **perceptron** makes hard, binary decisions: _yes_ or _no_, 1 or 0. **Logistic regression**, on the other hand, outputs the _probability_ that a data point belong to a given class. The perceptron updates its weights only when it makes a wrong prediction, while logistic regression updates continuously based on how confident or wrong it was.

# Linear vs Logistic Regression

Unlike [linear regression](/blog/linear-regression), logistic regression's output is **bounded** between 0 to 1, representing the probability that a given set of features belongs to a particular class. To bound the output, we use the **sigmoid function**:

$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$

### Why Sigmoid?

- Bounded between 0 to 1
- **Monotonically Increasing**, which means if $x_i < x_j$, then $f(x_i) < f(x_j)$
- Convenient derivative: $\sigma'(x)=\sigma(x)(1-\sigma(x))$, which makes optimization simpler

![Bounded Linear Regression](/blog-images/logistic-regression/bounded-regression.png)

## Turning Output into Decisions

To turn a predicted probability into a class decision, we apply a simple threshold:

$$
f(z) = \begin{cases} 1, & \sigma(z) \geq 0.5 \\ 0, & \sigma(z) < 0.5 \end{cases}
$$

Here, $z=w^Tx$ is the weighted sum of inputs.

![Logistic Regression Classifier](/blog-images/logistic-regression/logistic-regression-classifier.png)

# Probability vs. Likelihood

Probability answers the following question:

> Given what I know about the world (my parameters), how likely is a certain event?

$$
P(\text{event} \mid \text{parameters})
$$

Suppose I know:

- $P(\text{rain}) = 0.5$
- $P(\text{cloudy}) = 0.75$
- $P(\text{windy}) = 0.25$

The probability that it will **rain and be cloudy** tomorrow is:

$$
P(\text{rain}, \text{cloudy} \mid \text{parameters})
= 0.5 \times 0.75 = 0.375
$$

Here, the parameters are **fixed** and the event is **unknown**.

### Likelihood

Likelihood asks the opposite question:

> Given that I already observed an event, which parameter values make that observation most probable?

Mathematically, the **likelihood function** is:

$$
L(\text{parameters} \mid \text{event}) = P(\text{event} \mid \text{parameters})
$$

Here the event is **fixed** (we observed it), and the parameters are **unknown**.

Imagine it **did** rain and it **was** cloudy. To determine the likelihood, we compare parameter guesses by seeing how well each parameter explains what we saw:

- **Guess A**: $P(\text{rain}) = 0.5, \; P(\text{cloudy}) = 0.75 \Rightarrow \text{Likelihood} =  0.375$
- **Guess B**: $P(\text{rain}) = 0.8, \; P(\text{cloudy}) = 0.9 \Rightarrow \text{Likelihood} = 0.72$

Since $0.72 > 0.375$, **Guess B** makes the observed outcome more _likely_, meaning those parameters are more consistent with what we saw.

## From Statistics to Machine Learning

In logistic regression:

- **Parameters** — the model's weights $w$
- **Observations** — feature vectors $x_i$ and labels $y_i$ for each example $i$

$$
L(w \mid X, y) = \prod_{i=1}^n P(y_i \mid x_i, w)
$$

Since we are dealing with _binary classification_, the probability of an example being in the positive class is the same as it _not_ being the negative class:

$$
P(y=1 \mid x) = 1 - P(y=0 \mid x)
$$

To express _both cases_ ($y=1$ and $y=0$) in a single formula, we write:

$$
P(y_i \mid x_i, w) = \hat{y}_i^{y_i} (1 - \hat{y}_i)^{1-y_i}
$$

This is just a clever algebra trick to succinctly merge the two cases into a single expression.

- If $y_i=1: P(y_i \mid x_i, w) = \hat{y}_i$
- If $y_i=0: P(y_i \mid x_i, w) = 1 - \hat{y}_i$

# Maximizing Likelihood

In machine learning, our goal is to choose weights that **maximize the likelihood** of our observed data. This approach is called the **Maximum Likelihood Estimator (MLE)**. The MLE finds the _"optimal"_ weights $w^*$ that make the observed data most probable under our model.

$$
w^* = \underset{w}{\arg\max} \; L(w \mid X, y) = \underset{w}{\arg\max} \; \prod_{i=1}^n P(y_i \mid x_i, w)
$$

However, computing this directly is challenging. Taking the product of many probabilities can cause [numerical underflow](https://www.geeksforgeeks.org/machine-learning/underflow-and-overflow-with-numerical-computation/), where values become too small for the computer to represent accurately. Additionally, differentiating a product of many terms is computationally expensive.

## Log-Likelihood

To address these issues, we can take advantage of the logarithmic property:

$$
\log(ab)=\log(a)+\log(b)
$$

The core idea behind this is that we're replacing a difficult and expensive product with an easier to handle sum. Applying this to our likelihood gives us:

$$
\begin{align*}
\log L(w \mid X, y) &= \log \prod_{i=1}^n P(y_i \mid x_i, w)\\
                    &= \sum_{i=1}^n \log P(y_i \mid x_i, w) \\
                    &= \sum_{i=1}^n \left[ y_i \log \hat{y}_i + (1 - y_i) \log (1 - \hat{y}_i) \right]\\
\end{align*}
$$

where $\hat{y}_i = \sigma (w^Tx_i)$ is the predicted probability from our sigmoid activation function.

> **Why can we take the log of the likelihood?**
>
> Because the logarithm function is a **monotonic** function and is always increasing in one direction. We are essentially just scaling the output values (_y-axis_) of the graph while the peaks and valleys location (_x-axis_) stay at the same value. Thus, the weights that maximize $\log L(w)$ also maximize $L(w)$.

![Log Likelihood Animation](/blog-images/logistic-regression/log-likelihood.gif)
[Image Credit](https://towardsdatascience.com/cross-entropy-negative-log-likelihood-and-all-that-jazz-47a95bd2e81/)

## Binary Cross-Entropy (a.k.a Negative Log-Likelihood)

**Binary Cross-entropy (BCE)** is simply **negative log-likelihood** for binary classification. It measures how well the predicted probabilities match the true labels:

$$
BCE = - \sum_{i=1}^n \left[ y_i \log \hat{y}_i + (1 - y_i) \log (1 - \hat{y}_i) \right]
$$

- If $y_i=1$: the second term is zero, and the loss penalizes a low predicted probability for the positive class.
- If $y_i=0$: the first term is zero, and the loss penalizes a high predicted probability for the positive class.

### Examples

<div className="inline-display">

<div className="inline-display-child">

| $y_i$ | $\hat{y}_i$ |
| :---- | :---------- |
| 1     | 0.7         |
| 1     | 0.9         |
| 0     | 0.2         |
| 1     | 0.8         |
| 0     | 0.3         |

</div>

<div className="inline-display-child">

| $y_j$ | $\hat{y}_j$ |
| :---- | :---------- |
| 1     | 0.6         |
| 1     | 0.3         |
| 0     | 0.5         |
| 1     | 0.5         |
| 0     | 0.8         |

</div>

</div>

$$
BCE_i = - \left[ \log 0.7 + \log 0.9 + \log (1 - 0.2) + \log 0.8 + \log (1 - 0.3) \right] \approx 1.265
$$

$$
BCE_j = - \left[ \log 0.6 + \log 0.3 + \log (1 - 0.5) + \log 0.5 + \log (1 - 0.8) \right] \approx 4.711
$$

A lower BCE means better predictions. Confident and correct predictions yield small loss values, while confident but wrong predictions yield large losses.

## Finding $w^*$

Most optimization algorithms are designed to **minimize** functions rather than maximize them. Instead of maximizing $\log L(w)$, we minimize the **negative log-likelihood (BCE)**:

$$
w^* = \underset{w}{\arg\min} \; BCE(w)
$$

To find weights that minimize BCE, we use [gradient descent](/blog/gradient-descent). To gradient of BCE with respect to $w$ is:

$$
\nabla_w J(w) = \sum_{i=1}^n \left( \hat{y}_i - y_i \right) x_i
$$

[Derivation](https://www.python-unleashed.com/post/derivation-of-the-binary-cross-entropy-loss-gradient)

We then iteratively update:

$$
w_{t+1} = w_t - \alpha \cdot \nabla E(w)
$$

where $\alpha$ is the learning rate. Over time, this process finds the $w$ that minimizes BCE, and equivalently, maximizes the likelihood of the observed data.

# Multiclass Classification

So far, we have been describing **binary classification**. In that setting, we had a set of examples where the labels were $y \in \{ 0, 1 \}$ and the sigmoid activation function gave us a single probability $\hat{y}$ for the positive class, and we implicitly defined the negative class as $1 - \hat{y}$.

For **multiclass classification**, we now have $y \in \{ 1, 2, \dots, c \}$ _(we index the classes starting at 1, rather than 0)_ and have to estimate the probability of the class label belonging to each of the $c$ possible classes.

![Multiclass Classification](/blog-images/logistic-regression/multiclass.png)

## Softmax Activation

To have a valid probability distribution of our classes, we need to ensure that:

- Each class probability must be _non-negative_ and between 0 and 1
- All class probabilities must sum to 1

Using the **softmax** activation function, we can calculate the predicted probability that example $i$ belongs to class label $k$:

$$
\hat{y}_{i,k} = \frac{e^{z_{i,k}}}{\sum_{j=1}^c e^{z_{i,j}}}
$$

> When $c=2$ softmax reduces to the sigmoid function. Try it out for yourself!

Here, $z_{i,k} = w_k^Tx_i$ is the weighted sum of inputs (**logit**) for example $i$ belonging to class $k$. Since we are defining multiple decision boundaries, we will need a separate weight vector for each class. For convenience, we will denote the weights of our model $W$ as a matrix of shape $(n, c)$ obtained by combining $w_1, w_2, \dots, w_c$ into columns such that:

$$
W = \begin{bmatrix} | & | & | & |\\ w_1 & w_2 & \dots & w_c\\| & | & | & | \end{bmatrix}
$$

We can also store the predicted probability $\hat{y}_{i,k}$ for each example $i$ and class $k$ into a matrix $\hat{Y}$ of shape $(n,c)$.

## Likelihood of Multiple Classes

Just like in the binary case, our goal is to **maximize the likelihood** of the observed data. The difference is that now our labels $Y$ are **one-hot encoded** in a matrix of shape $(n, c)$, where:

<div className="inline-display">

<div className="inline-display-child">

- $y_{i,k} = 1$ if example $i$ belongs to class $k$
- $y_{i,k} = 0$ otherwise

</div>

<div className="inline-display-child">

| Examples  | $A$ | $B$ | $C$ |
| :-------- | :-- | :-- | :-- |
| Example 1 | 0   | 1   | 0   |
| Example 2 | 1   | 0   | 0   |
| Example 3 | 0   | 0   | 1   |

</div>

</div>

The likelihood becomes:

$$
\begin{align*}
L(W \mid X, Y) &= \prod_{i=1}^n \prod_{k=1}^c P(y_{i,k} = 1 \mid w_k, x_i)\\
               &= \prod_{i=1}^n \prod_{k=1}^c \hat{y}_{i,k}^{y_{i,k}}
\end{align*}
$$

This form mirrors the binary formula $\hat{y}_i^{y_i}(1-\hat{y}_i)^{1-y_i}$, but extended to $c$ classes. Here, only the correct class contributes to the product because all incorrect class terms are raised to the power 0 (which equals 1).

## Log-Likelihood and Cross-Entropy

Taking the log converts the product into a sum:

$$
\log L(W \mid X, Y) = \sum_{i=1}^n \sum_{k=1}^c y_{i,k} \log \hat{y}_{i,k}
$$

To find the optimal weights, $W^*$, we minimize the **negative log-likelihood (Cross Entropy)**:

$$
W^* = \underset{W}{\arg\min} \; \text{CE}(W) = - \sum_{i=1}^n \sum_{k=1}^c y_{i,k} \log \hat{y}_{i,k}
$$

Since we cannot solve for $W^*$ analytically, we must again use an iterative optimization algorithm like **gradient descent**. The gradient for each class decision boundary with respect to our weight matrix $W$ is:

$$
\nabla_W J(W) = X^T(\hat{Y} - Y)
$$

# Wrapping Up

Logistic regression is just a way of asking, “Given what I’ve seen, what’s the most likely answer?”. Everything else is the math that lets a computer answer that question.

In binary classification, the story is simple: one curve, two outcomes, and if you’re not one class, you must be the other. Multiclass expands on this: now we’ve got a set of scores, one for each class, which are turned into probabilities using softmax, with the highest probability winning.

By now, this is the third **supervised** learning algorithm we've covered, and you should start to notice a pattern with how these models learn from data.

1. Decide what counts as a _good predictions_ versus a _bad one_
2. Define a number that measures how bad we did (our loss)
3. Adjust the weights to make that number smaller next time.

It's the same cycle every time: ask the question, measure the answer, and learn from the mistakes.
