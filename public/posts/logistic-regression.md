*This post builds off the ideas and notation introuced in the following two posts:*
- [How Linear Regression Works (and Why it's the Foundation of Machine Learning)](/blog/linear-regression)
- [From Lines to Layers: The Linear Perceptron and the Rise of Neural Networks](/blog/linear-perceptron)

<br></br>
At its core, **logistic regression**, and other classifiers like the [linear perceptron](/blog/linear-perceptron), are essentially executing the same goal: assign a class to a set of data points. At a glance, they seem almost identical.  They both make predictions by drawing a **decision boundary** to seperate those data points, and make predictions by using a weighted sum of inputs. Where they differ is *how* they makes their predicitons.

The **percptron** makes hard, binary decisions on the class, either: *yes* or *no*, 1 or 0. **Logistic regression** outputs the probabilities of a data point being that class. One updates only when its wrong. The other updates continuously based on how confident or wrong it was.

# Linear Regression vs Logistic Regression

Unlike [linear regression](/blog/linear-regression), logistic regression's output is **bounded** from 0 to 1, which represents the probability of a set of features has the given class label. In order to bound the output, we use the **sigmoid function**:

$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$

### Why Sigmoid?

- Bounded from 0 to 1
- **Monotonically Increasing**, which means if $x_i < x_j \rightarrow f(x_i) < f(x_j)$
- It also has some nice computational properties, with its derivative being $\sigma'(x)=\sigma(x)(1-\sigma(x))$ 

![Bounded Logistic Regression](/blog-images/bounded-regression)

## Turning Output into Decisions

To turn the predicted probabiity of a class label into a decision, we simply use the following function:

$$
f(z) = \begin{cases} 1, & \sigma(z) \geq 0.5 \\ 0, & \sigma(z) < 0.5 \end{cases}
$$

Where $z=w^Tx$, being our weighted sum of inputs.

![Logistic Regression Classifier](/blog-images/logistic-regression-classifier)

# Probability vs. Likelihood

If I tell you that there is a $50\%$ chance it will rain tomorrow, I am predicting the *likelihood* of an *event* given what you know about the world.

- $p(\text{rain}) = 0.5$
- $p(\text{cloudy}) = 0.75$
- $p(\text{windy}) = 0.25$

The probability that it will rain *and* be cloudy is $p(\text{rain}) \cdot p(\text{cloudy}) = 0.375$

We know the **parameters**, but the actual events are still *unknown*.

### Likelihood

Likelihood asks the opposite question: given it already rained, what parameter values make that event the most probable?

- **Guess A**: $p(\text{rain}) = 0.5, p(\text{cloudy}) = 0.75 \Rightarrow 0.375$
- **Guess B**: $p(\text{rain}) = 0.8, p(\text{cloudy}) = 0.9 \Rightarrow 0.72$

Since Guess B gives a higher probability for what actually happened, it is more *likely* to be the correct set of parameters for what you observed.

## Maximizing Likelihood

In logistic regression, the parameters are the **weights** of the model, and the observed data is the feature vectors and labels. We want to find the set of parameters that make our observed data **most probable**.

In other words, we want to maximize the likelihood of our parameters given our observed data. This is called the **Maximum Likelihood Estimator**:

$$
w^* = \max_w L(w | x) = \max_w \Pi_{i=1}^n p(x_i | w)
$$



# Multiclass Classification
