At its core, the linear perceptron is like a tiny **decision maker**. It takes a set of inputs, weighs how important each input is, and produces one of two outputs: _yes_ or _no_, 1 or 0, _apples_ or _oranges_. Imagine a straight line cutting through a 2D space: everything on one side is classified as one thing, everything on the other side is classified as something else. Each example we test becomes a data point in that space, and the perceptron decides which side of the line it belongs on.

The linear perceptron is a **supervised learning algorithm** that is a **binary classifier**—meaning it tries to separate data into _two_ categories. It learns by comparing its predictions with the expected answers and adjusting its weights until it draws a line that correctly divides the two classes.

![Linear Perceptron](/blog-images/linear-perceptron/perceptron.png)

# A Sweet Example

Let's say we want to predict whether a user will click on an ad for ice cream. Naturally, most people don't click on ads, so we shift our **decision boundary** a bit to account for this tendency. This shift is called the **bias**. We also have other information about the user:

- Searched for "ice cream"

- Recently bought ice cream

- Is lactose intolerant

We can put this information about our user into a **feature vector** and assign a **weight** to each input. To include the bias, we add an extra feature with a constant value of 1 and give it its own weight $w_0$:

$$
x = \begin{bmatrix} 1 \\ x_1 \\ x_2 \\ \vdots \\ x_d \end{bmatrix} \quad w = \begin{bmatrix} w_0 \\ w_1 \\ w_2 \\ \vdots \\ w_d \end{bmatrix}
$$

We then take the **dot product** of these two vectors. This gives us a single number that represents the combined influence of all the points. To turn that number into a decision (_click_ or _no click_) we pass it through an **activation function**:

$$
output = f(w^Tx)
$$

# Activation Functions

An activation function is like a switch:

- If the total score is high enough, the switch turns on (_click_)

- If its too low, the switch stays off (_no click_)

For a simple linear perceptron, this "switch" is a **step function**:

$$
f(z) = \begin{cases} 1, & z \geq 0 \\ 0, & z < 0 \end{cases}
$$

![Step Function](/blog-images/linear-perceptron/step-function.png)

Where the score, $z=w^Tx$, is our weighted sum of inputs. Without an activation function, our perceptron would just spit out numbers. The activation function is what turns those numbers into **decisions**.

> What happens when $w^Tx=0$?
>
> By convention, ties that lie exactly on the decision boundary go the **positive** class.

# Learning the Weights

### 1. Start With a Guess

We begin by assigning **random** weights to each input. At first, the perceptron is just guessing where the boundary should be and will produce subpar predictions.

### 2. Make Predictions

For each data point, we calculated the predicted output $\hat{y}$ (either 0 or 1):

$$
\hat{y} = f(w^Tx)
$$

### 3. Compare

Because the linear perceptron is a **supervised learning algorithm**, we know the correct output. If the prediction was wrong, we need to adjust the weights.

### 4. Adjusting the Weights

For each incorrectly classified data point, we nudge its weights to make better predictions next time. The update rule looks like this:

$$
w_{t+1} = w_t + \alpha \cdot (y - \hat{y}) x
$$

Where:

- $y$ is the correct output
- $\hat{y}$ is the predicted output
- $w$ is the weight vector we are updating
- $\alpha$ is the **learning rate**, or how _much_ we should adjust the weights
- $t$ is the training iteration

This is essentially saying:

- If the perceptron guessed **too low** when the answer was yes: **increase weights** for those inputs.
- If the perceptron guessed **too high** when the answer was no: **decrease weights**.

### 5. Repeat

Repeat steps 2-4 many times until the model either correctly predicts each data point, or we have exceeded the maximum number of iterations. We will see later why we need to set a limit on the number of training iterations.

## Back to Our Ice Cream Example

Let's walk through an iteration of our training algorithm and see how the model adjusts its weights to make better predictions.

- **Inputs:** $x = \begin{bmatrix} 1, 1, 0 \end{bmatrix}$ _(bias = 1, searched "ice cream", not lactose intolerant)_
- **Current Weights:** $w_t = \begin{bmatrix} -0.5, 0.3, 0.3 \end{bmatrix}$
- **Correct Output:** $y = 1$ _(they clicked)_
- **Initial Prediction:** $\hat{y}_t = 0$ _(perceptron says no)_
- **Learning Rate:** $\alpha = 0.2$

Update Step:

$$
w_{t+1} = w_t + 0.2 \cdot (1 - 0)\begin{bmatrix} 1, 1, 0 \end{bmatrix} = \begin{bmatrix} -0.5, 0.3, 0.3 \end{bmatrix} + \begin{bmatrix} 0.2, 0.2, 0 \end{bmatrix} = \begin{bmatrix} -0.3, 0.5, 0.3 \end{bmatrix}
$$

### Comparing Predictions

Before the weight update:

$$
\hat{y}_t = f(w_t^Tx) = f(1 \cdot -0.5 + 1 \cdot 0.3 + 0 \cdot 0.3) = f(-0.2) = 0
$$

The model guessed wrong. After the update:

$$
\hat{y}_{t+1} = f(w_{t+1}^Tx) = f(1 \cdot -0.3 + 1 \cdot 0.5 + 0 \cdot 0.3) = f(0.2) = 1
$$

The perceptron now predicts correctly. This is learning in action, the model shifts its **decision boundary** a little closer to the right answer after each mistake.

# Limitations of a Single Perceptron

Our example shows a case where the data can be separated by a straight line, the perceptron just had to learn where to put it. _But what if the data can't be split cleanly by any line at all?_

<div className="inline-display">

<div className="inline-display-child">

![Linearly separable](/blog-images/linear-perceptron/linearly-separable.png)

</div>

<div className="inline-display-child">

![Not Linearly separable](/blog-images/linear-perceptron/not-linearly-separable.png)

</div>

</div>

If the data points are **linearly separable**, our perceptron algorithm is **_guaranteed_** by the [Perceptron Convergence Theorem](https://www.geeksforgeeks.org/deep-learning/perceptron-convergence-theorem-in-neural-networks/) to find a set of weights $w$ that correctly classifies every point in a _finite_ number of steps.

If the data points are **not linearly separable**, no straight-line classifier can perfectly separate them. In this case, the perceptron will continue adjusting its weights indefinitely, oscillating between solutions without ever reaching a perfect classification. That's why we usually set a limit on the number of iterations or another stopping condition to prevent infinite training.

## The XOR Problem

The XOR (exclusive OR) is a logical operation that results in _true_ if and only if one of its inputs is _true_ and the other is _false_. We can represent this behavior as both a truth table and a set of points on a 2D plane.

<div className="inline-display">

<div className="inline-display-child">

| $x_1$ | $x_2$ | XOR |
| :---- | :---- | :-- |
| 1     | 1     | 0   |
| 1     | 0     | 1   |
| 0     | 1     | 1   |
| 0     | 0     | 0   |

</div>

<div className="inline-display-child">

![XOR Problem](/blog-images/linear-perceptron/xor-problem.png)

</div>

</div>

You can clearly see no matter how you draw a single straight line, you can't perfectly separate the two classes. Points in opposite corners belong to the same class, meaning you'd need at least two lines or a curved boundary to classify them correctly.

This is the **XOR Problem**, a classic example that shows the limitations of a single perceptron.

### Why This Was a Big Deal

Back in the 1960s, this wasn't just a small inconvenience, it was a fundamental limitation of machine learning. After all, if we couldn't teach a model to separate four points on a plane—_how could we expect it to solve complex real-world problems?_ This discovery led to the first [AI winter](<https://en.wikipedia.org/wiki/History_of_artificial_intelligence#First_AI_Winter_(1974%E2%80%931980)>), a period where funding and interest in AI dropped sharply.

### The Solution: More Neurons

Instead of just relying on **one perceptron**, you can stack many perceptrons into **layers**.

- The first layer can learn simple, straight-line boundaries
- The next layer can combine those boundaries to make more complex shapes
- Add [non-linear activation functions](https://www.geeksforgeeks.org/machine-learning/activation-functions-neural-networks/) (like sigmoid, ReLU, tanh), and suddenly networks can model curved, multi-step decision boundaries that a single perceptron never could.

This is the foundation of [neural networks](/blog/neural-networks)

# From Perceptrons to Neural Networks

Each perceptron becomes an individual **node** inside a larger network. On its own, it draws one line. But together, in layers, these nodes can learn highly flexible decision boundaries.

![Node](/blog-images/linear-perceptron/node.jpg)
[Image Credit](https://gmongaras.medium.com/how-do-neural-networks-work-bfdd3ca6c23a)

Over time, researchers improved training techniques (with enhancements like [backpropagation](/blog/backpropagation)) and computers got faster, enabling **deep learning**—networks with many layers and thousands or millions of nodes. These systems power everything from autonomous vehicles to large language models, but at their core, they're still built on the same fundamental principle [Rosenblatt](https://en.wikipedia.org/wiki/Frank_Rosenblatt) introduced back in 1958:

$$
\text{Weighted Inputs} \rightarrow \text{Activation Function} \rightarrow \text{Output}
$$

Stack enough of these simple decision-makers together, and you can model just about anything.
