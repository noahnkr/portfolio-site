Machine learning is about teaching computers to find patterns in data. While many frameworks let you build models without diving into the math, understanding the underlying concepts, especially in **linear algebra** and **calculus**, can give you a much deeper intuition for how these systems work and why they behave the way they do.

In this post, I’ll walk through the most important topics in linear algebra and calculus that you’ll see across machine learning models, from linear regression to neural networks.

# Linear Algebra in Machine Learning

Linear algebra is the language of machine learning. We can represent our data using **vectors** and **matrices** and many machine learning algorithms are simply manipulating our data through matrix operations.

## 1. Vectors

A **vector** is just an ordered list of numbers, often used to represent a point in space, a direction, or a collection of features for a data point. In machine learning, vectors commonly represent inputs like measurements or attributes.

The illustration below shows how a vector can be broken down into its **component vectors**, with each component having a length (or _magnitude_) along an axis. These components stack together, starting from the origin and extending through each axis direction.

![vector](/blog-images/math-review/vec.png)

This idea is easy to visualize in two or three dimensions. But as we move into higher-dimensional spaces, where each feature becomes its own axis, visualizing vectors becomes impossible. That's normal. Just keep in mind that the same principles apply, even if we can't "see" them.

### Vector Operations

$$
x = \begin{bmatrix} 3 \\ 5 \\ 6 \end{bmatrix} \quad y = \begin{bmatrix} 1 \\ 4 \\ 0 \end{bmatrix}
$$

1. Addition & Subtraction

   > $x + y = \begin{bmatrix} 4 \\ 9 \\ 6 \end{bmatrix}$
   >
   > This represents combining two vectors element by element. You can think of it as adding two measurements together.

2. Scalar Multiplication

   > $4x = \begin{bmatrix} 12 \\ 20 \\ 24 \end{bmatrix}$
   >
   > This scales each component of the vector. It’s like turning up the volume of all features equally.

3. Dot Product

   > $x \cdot y = (3 \cdot 1) + (5 \cdot 4) + (6 \cdot 0) = 23$
   >
   > The dot product measures how similar two vectors are in direction. A higher value means they point in a more similar direction.

4. Norm (Vector Magnitude)

   > $||x||= \sqrt{3^2 + 5^2 + 6^2} \approx 8.367$
   >
   > The norm is the length of the vector, calculated using the Pythagorean theorem. It’s often used to measure the size or distance of a data point from the origin.

## 2. Matrices

A matrix is just a table of numbers. If you’ve ever used Excel or Google Sheets, you’ve already worked with something like a matrix. In machine learning, we use matrices to represent entire datasets. Each row is usually a data point, and each column is a feature or attribute.

| Height (in.) | Weight (lb.) | Age |
| :----------- | :----------- | :-- |
| 70           | 160          | 28  |
| 65           | 130          | 22  |
| 72           | 180          | 31  |

We can write this table as a matrix like this:

$$
X = \begin{bmatrix} 70 & 160 & 28 \\ 65 & 130 & 22 \\ 72 & 180 & 31 \end{bmatrix}
$$

You may have noticed that a matrix is essentially a group of vectors stacked on top of each other (as rows) or arranged side by side (as columns). In machine learning, we usually treat each row of a matrix as a separate data point, and each column as a different feature.

So if you have a dataset with 100 examples and 3 features (like height, weight, and age), you can represent it as a matrix with 100 rows and 3 columns

### A Quick Note on Tensors

A **tensor** is a general way to describe a container of data. Just as a **vector** is a one-dimensional list of numbers, and a **matrix** is a two-dimensional grid, a **tensor** can have any number of dimensions. So really, tensors are the umbrella term to describe scalars, vectors, and matrices.

Tensors have three main properties:

1. **Rank** — This just means how many dimensions the tensor has. A scalar has rank 0, a vector has rank 1, a matrix has rank 2, and so on. A rank-3 tensor might describe something like an RGB image, and rank-4 or higher is common in **deep learning**.

2. **Shape** — The shape tells you the size of the tensor along each dimension. For instance, the shape of the previous matrix example has shape $(3,3)$. A vector with 5 elements has shape $(5,)$ _(the trailing comma tells us it's a 1D shape, not just a plain number)_. A scalar, being just a single number, has shape $()$.

3. **Data Type** — Tensors usually store numbers (like integers or floats), but they can hold other types too, like strings or booleans.

Tensors with more than two dimensions are useful for representing more complex data. For example, you can represent a video as a rank-4 tensor with shape $(\text{frames, height, width, 3})$, where the last dimension corresponds to color channels (red, green, blue).

While we won’t go too deep into high-rank tensors here, it's helpful to know that scalars, vectors, and matrices are just special cases of tensors. The concept of shape becomes especially important when doing operations on tensors. If the shapes don’t match in the right way, the operation won’t work.

![tensor](/blog-images/math-review/tensor.jpg)
[Image Credit](https://www.kdnuggets.com/2018/05/wtf-tensor.html)

### Matrix Operations

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \quad
B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} \quad
I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
$$

1. Matrix Addition & Subtraction

   > $A + B = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$
   >
   > Note: matrices must be the same shape

2. Matrix Multiplication

   > $AB = \begin{bmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$
   >
   > Unlike addition, matrix multiplication is **not** element-wise. Instead, it involves combining rows from the first matrix with the columns from the second.
   >
   > Note: the number of columns in the first matrix must equal the number of rows in the second. The resulting matrix will have the number of rows in the first matrix and the number of columns in the second.

3. Transpose

   > $A^T = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$
   >
   > This flips the matrix, turning rows into columns. It's often used when aligning the data for matrix operations.

4. Identity Matrix

   > $AI = A$
   >
   > Like the number 1, any matrix multiplied by the identity matrix stays the same.

5. Inverse Matrix

   > $A^{-1} = \frac{adj(A)}{det(A)} = \frac{1}{1 \cdot 4 - 2 \cdot 3} \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$
   >
   > The inverse of a matrix is like the reciprocal of a number (e.g., the reciprocal of $5$ is $\frac{1}{5}$ because $5 \cdot \frac{1}{5} = 1$). Similarly, the inverse of matrix $A$ is the matrix that satisfies $AA^{-1}=I$.
   >
   > Matrix inverses are used in certain algorithms, but in practice, we avoid calculating $A^{-1}$ directly because it can be computationally expensive and unstable. You can learn more about how to calculate the inverse of a matrix [here](https://www.mathsisfun.com/algebra/matrix-inverse.html).

## 3. Linear Transformations

Many machine learning models are built on linear transformations, which are essentially functions that scale, rotate, or project data using matrix multiplication. So far, we've looked at matrices as just tables of numbers, but they actually describe **transformations of space**. Think of a matrix not just as a data container, but as a function that _reshapes_ or _moves_ vectors.

A great tool to help visualize these transformations can be found [here](https://shad.io/MatVis/). The 3Blue1Brown video below is also a great reference to gain a better understanding of how this works.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kYB8IZa5AuE?si=oWG1a41VldyVDKHJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Calculus in Machine Learning

Calculus can feel intimidating, especially if it's been a while since you last saw it. But I can assure you that as someone who was never the biggest fan of calculus, a basic understanding of its key concepts and rules is more than enough for most applications. Still, there's great value in understanding what's happening behind the scenes. I'll walk through the core ideas at a high level, without diving into any math.

## 1. Derivatives

A **derivative** tells us how a function changes as its input changes (i.e., slope or rate of change). If a function’s input increases slightly, the derivative tells us how much the output will increase (or decrease) as a result. In machine learning, we use derivatives to understand how the loss function, which measures how wrong our model is, changes as we tweak the model’s parameters (like weights in a neural network).

## 2. Gradients

A **gradient** is a generalization of the derivative for functions with multiple inputs. It’s a vector that contains all the partial derivatives with respect to each input. Each partial derivative tells us how much the output would change if we nudged just one input a little, keeping the others fixed.

In machine learning, the gradient points in the direction of steepest increase of the loss function. To improve the model, we move in the opposite direction, called the **negative gradient**, which reduces the loss. This process is called [gradient descent](/blog/gradient-descent), and it's one of the core techniques behind training models.

![gradient](/blog-images/math-review/gradient.jpg)
[Image Credit](https://blog.paperspace.com/part-4-generic-python-implementation-of-gradient-descent-for-nn-optimization/)

## 3. Chain Rule

The chain rule lets us compute the derivative of functions that are made up of other functions. For instance, when one function’s output is the input to another. This is especially important in [neural networks](/blog/neural-networks), where each layer passes its output to the next. Using the chain rule, we can “chain together” derivatives from the final output all the way back to the first layer. This is the key idea behind [backpropagation](/blog/backpropagation), the algorithm used to train deep learning models.

# What's next?

If this post refreshed a few concepts for you, great. Understanding the math behind machine learning doesn't mean you need to be able to do matrix multiplication or calculate partial derivatives. Thanks to libraries like [TensorFlow](https://www.tensorflow.org/), [PyTorch](https://pytorch.org/), and [Keras](https://keras.io/), you rarely need to do any math by hand. But having an intuition for concepts like vectors, matrices, gradients, and derivatives can help you see how these models work under the hood and understand why they behave the way they do.

I believe the best way to learn is through trial and error. In future posts, I'll break down how these ideas apply directly to machine learning, and how to build your own models and algorithms.
