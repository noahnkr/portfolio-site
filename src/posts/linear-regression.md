If you're just starting to explore machine learning, it can be tempting to jump straight into complex models like neural networks or decision trees. But beneath all of that complexity is a surprisingly simple and powerful idea: **linear regression**.

**Linear Regression** is a type of **supervised learning algorithm**, which means in our dataset we know what the _expected_ result should be, and we can compare the model's _predictions_ with the expected result. In the case of linear regression, the expected result is some number. The goal of linear regression is to find some relationship between the inputs (called _features_) and the output (_label_).

For example, let's say we want to predict the price of a house given it's size. We can collect housing data and plot a bunch of points on a graph of how the size of a house affect's its price. With enough data, we can start to draw a _line of best fit_ through those data points in order to predict future house prices.

<div className="inline-display">

<div className="inline-display-child">

| Price ($) | Size ($\text{ft}^2$) |
| :-------- | :------------------- |
| 360,000   | 1,300                |
| 540,000   | 1,800                |
| 770,000   | 2,200                |
| 864,000   | 2,400                |
| 990,000   | 3,000                |

</div>

<div className="inline-display-child">

![img](/blog-images/linear-regression/house-price-graph.png)

</div>

</div>

This scales beyond just one input. With multiple features (number of rooms, location, etc.), instead of fitting a line in two dimensions, we're fitting a **plane** or **hyperplane** in higher dimensions.

# The Linear Model

You may recall from your algebra class that the equation for a straight line is $y = mx + b$. This formula tells us that for every unit increase in $x$, the output $y$ increases by $m$. In machine learning, we use a similar idea, but instead of just one input, we often have many. Each input is a feature, and we want to learn how much each one contributes to the final prediction.

### From One Feature to Many

To generalize the lien equation to work with _multiple features_, we turn our input into a vector:

$$
x = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_d \end{bmatrix}
$$

And assign each feature its own **weight**:

$$
w = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_d \end{bmatrix}
$$

Then, the prediction is:

$$
\hat{y} = w^Tx + b
$$

This is our **linear model**, where:

- $\hat{y}$ is the predicted value
- $x$ is the input vector of features
- $w$ is the weight vector
- $b$ is the **bias** (same as the intercept in $y=mx+b$)

Each weight tells us how strongly that feature influences the prediction. The model combines all the weighted inputs and adds the bias to produce the output.

### From One Example to Many

So far, we've described a single prediciton for one input. But machine learning models are trained on _many examples_ at once. If we have $n$ training examples, each with $d$ features, we can stack all our input vectors into a matrix:

$$
X = \begin{bmatrix} x^{(1)} \\ x^{(2)} \\ \vdots \\ x^{(n)} \\\end{bmatrix} = \begin{bmatrix} x^{(1)}_1 & x^{(1)}_2 & \dots & x^{(1)}_d \\ x^{(2)}_1 & x^{(2)}_2 & \dots & x^{(2)}_d \\ \vdots & \vdots & \ddots & \vdots \\ x^{(n)}_1 & x^{(n)}_2 & \dots & x^{(n)}_d \end{bmatrix}
$$

This matrix is called the **design matrix**, where each row is an example and each column is a feature. This is pretty useful because we can make predictions for all examples with just one matrix operation:

$$
\hat{y}=Xw+b
$$

### A Note on Bias Handling

Some implementations absorb the bias term $b$ into the weight vector $w$ by adding an extra feature that is always 1:

$$
x = \begin{bmatrix} 1 \\ x_1 \\ \vdots \\ x_d \end{bmatrix}
$$

$$
w = \begin{bmatrix} b \\ w_1 \\ \vdots \\ w_d \end{bmatrix}
$$

Then the prediction beomces:

$$
\hat{y} = w^Tx
$$

This form simplifies the math. In the future you may see me use this notation but for this post we'll keep seperate $w$ and $b$ for clarity.

# Limitations

Like I mentioned in my [introductory post](https://noahnkr.com/blog/machine-learning-overview), machine learning is a set of tools, and knowing what tool to use in certain situations is just as important as understanding how these models work. When we are using linear regression, we are making a few assumptions about our dataset in order to make accurate predictions.

### 1. Linearity

Our first assumption is that there is a _linear relationship_ between our input features and the expected outputs. There is a linear relationship between the size of a house, and its price (i.e., the bigger the house, the higher the price). For many real-world problems, this is usually not the case. If the data forms a curve, a cluster, or changes direction, a linear model won't capture those patterns well, no matter how much data you give it.

This is where more advanced models like [neural networks](https://noahnkr/blog/neural-networks) come in. They can handle _non-linear_ patterns by transforming the input space or using more flexible functions. Still, starting with a linear model is a good first step and baseline.

<div className="inline-display">

<div className="inline-display-child">

![linear](/blog-images/linear-regression/linear.png)

</div>

<div className="inline-display-child">

![nonlinear](/blog-images/linear-regression/nonlinear.png)

</div>

</div>

### 2. Independent Residuals

Another assumption we are making is that the residuals are independent of one another. This means that the error for one data point shouldn't affect or predict the error of another. This is especially important in sequential data (like time-series), where the data points are correlated with each other.

### 3. Identically & Normally Distributed

The last assumption we are making is that the residuals follow the same, normal distribution. This mean's that there should be a constant _variance_ across all data points. If the residuals start to fan out or shrink together, it's called [heteroscedasticity](https://en.wikipedia.org/wiki/Homoscedasticity_and_heteroscedasticity), and will negatively affect the accuracy of the model.

<div className="inline-display">

<div className="inline-display-child">

![homoscedasticity](/blog-images/linear-regression/homoscedasticity.png)

</div>

<div className="inline-display-child">

![heteroscedasticity](/blog-images/linear-regression/heteroscedasticity.png)

</div>

</div>

# Measuring Error

Once our model is making predictions, we need a way to measure how well it's performing across _all_ data points This is where a **loss function** comes in. Just like choosing the right model for a task, picking the right loss function can make the difference between a model making accurate or misleading predictions. There are many different types of [loss functions](https://www.geeksforgeeks.org/machine-learning/ml-common-loss-functions/), but the most common one used in linear regression is **Mean Squared Error (MSE)**:

$$
MSE = \frac{1}{n} \sum_{i=1}^{n} \left( y_i - \hat{y}_i \right)^2
$$

### Residuals

The difference between the true value and the predicted value is called the residual:

$$
Residual = y_i - \hat{y}_i
$$

This represents how far off the model’s prediction was for example $i$. If the residual is large, the prediction was poor. If it’s close to zero, the prediction was accurate.

To keep track of individual examples, we use a subscript $i$ to indicate which prediction we're referring to.

> **Why do we square the residuals?**
>
> Residuals can be either positive or negative. If we simply summed them, those positive and negative errors could cancel each other out, making it seem like the model is performing better than it really is.
>
> By squaring each residual, we ensure all errors are positive and that larger mistakes are penalized more heavily than smaller ones. This gives us a more accurate picture of the model’s overall performance.

# Training the Model

_Training_ simply means finding the best weights that allow the model to make accurate predictions on our data. Now that we can measure our model's performance via **Mean Squared Error**, we want to _minmize_ this function in order to achieve the lowest possible error. The model starts off with random weights. At first, it makes bad predictions. Our goal is to _adjust the weights_ so that the model makes better predictions (i.e., the error decreases). This is where **gradient descent** comes in.

## Gradient Descent

**Gradient Descent** is an _optimization algorithm_, which is a method that iteratively adjusts the weights in order to reduce the error of a loss function. You can think of gradient descent as slowly traversing down a foggy mountain. You can't see the entire landscape, but you can see the slope beneath you and can take small steps downhill, eventually reaching flat ground.

![gradient](/blog-images/linear-regression/gradient.png)

## How It Works

1. Initialize weights randomly.
2. Make predictions using those weights.
3. Calculate the loss, which tells us how far off our predictions are.
4. Compute the gradient of the loss function with respect to the weights. This tells us the direction and rate of change of the loss.
5. Update the weights slightly in the direction that reduces the loss (_negative gradient_).
6. Repeat this process many times until the loss is minimized.

## Computing the Gradient

_Preface: If you haven't brushed up on calculus recently, you might find it helpful to read my post on the [math used in machine learning](https://noahnkr/blog/math-review)._

To update our weights using gradient descent, we need to compute the gradient of the loss function **with respect to the weight vector**. This tells us how changing each weight will affect the model's error.

We'll assume:

- We have a dataset with $n$ examples
- Each example $x_i$ has $d$ features
- $w$ is the **weight** vector
- $b$ is the **bias** term
- $\hat{y}_i= w^Tx_i$ is the predicted output
- $y_i$ is the actual label

Our loss function is **Mean Squared Error (MSE):**

$$
L(w) = \frac{1}{n}\sum_{i=1}^{n}(\hat{y}_i - y_i)^2
$$

### Taking the Derivative

Now we compute the gradient with respect to $w$:

$$
\begin{align*}
\frac{\partial L}{\partial w} &= \frac{\partial}{\partial w} \left[ \frac{1}{n} \sum_{i=1}^{n} \left( \hat{y}_i - y_i \right)^2 \right] \\
&= \frac{1}{n} \sum_{i=1}^{n} 2 \left( \hat{y}_i - y_i \right) \cdot \frac{\partial \hat{y}_i}{\partial w} \\
&= \frac{2}{n} \sum_{i=1}^{n} \left( \hat{y}_i - y_i \right) \cdot x_i
\end{align*}
$$

We also compute the gradient of the loss with respect to the bias $b$:

$$
\begin{align*}
\frac{\partial L}{\partial b} &= \frac{1}{n} \sum_{i=1}^{n} 2 (\hat{y}_i - y_i) \cdot \frac{\partial \hat{y}_i}{\partial b} \\
&= \frac{1}{n} \sum_{i=1}^{n} 2 (\hat{y}_i - y_i) \cdot 1 \\
&= \frac{2}{n} \sum_{i=1}^{n} (\hat{y}_i - y_i)
\end{align*}
$$

## Updating Our Weights

Now we can update our weights:

$$
w_{t+1} = w_t - \alpha \cdot \frac{\partial L}{\partial w}
$$

Where:

- $w$ is the vector of weights we're updating
- $t$ is the current iteration step
- $\alpha$ is the **learning rate**, which controls how large each update step is
- $L$ is the loss function we're trying to minimize

By plugging the computed gradient into this update rule, the model takes a small step in the direction that reduces the error. Repeating this process over many iterations allows the model to "learn" by gradually improving its predictions. This is the core idea behind how most machine learning models are trained.

# Implementation

So far, we’ve gone over how linear regression works under the hood, now lets implement a simple training routine.

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from matplotlib.pyplot import plt

# Assume X is your feature matrix and y is your target vector

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create the model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate performance
mse = mean_squared_error(y_test, y_pred)
pprint(f"Mean Squared Error: {mse:.2f}")
print("Weights (slope):", model.coef_)
print("Bias (intercept):", model.intercept_)

# Visualization
plt.scatter(X, y, color='blue')
plt.plot(X, model.predict(X), color='red')
plt.show()
```

## What Just Happened?

- `model.fit()` ran the training loop internally, it handled all the gradient computations and updated the weights for you. Neat!
- `model.coef_` gives you the learned weights.
- `model.intercept_` gives you the bias term.

If you've been following along, this simple coding example should make a lot more sense.

# Wrapping Up

That was a lot, but hopefully now linear regression doesn’t feel like a mystery. It’s just a model that tries to draw the best line (or hyperplane) through your data by adjusting weights to reduce error. We looked at how it works from both a math and code perspective, and hopefully things are starting to make a little more sense now.

Even though it’s one of the simplest models in machine learning, it’s also one of the most important. A lot of more advanced techniques build off these same core ideas: predictions, loss functions, gradients, and optimization. If you understand this, you're off to a great start.
