var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "activity-1-1-worksheet",
  "level": "1",
  "url": "activity-1-1-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "1.1 Block Matrices",
  "body": " 1.1 Block Matrices   A block matrix is a matrix that is interpreted as having been broken into sections called blocks , or submatrices . Intuitively, a block matrix can be interpreted as the original matrix that is partitioned into a collection of smaller matrices. For example, the matrix   can also be written as a 2 × 2 partitioned (or block) matrix:   where the entries of A are the blocks   We partitioned our matrix into four blocks, each of which have different dimensions. But the matrix could also, for example, be partitioned into five 4 × 1 blocks, or four 1 × 5 blocks. Indeed, matrices can be partitioned into blocks in many different ways, and depending on the application at hand, there can be a partitioning that is useful or needed.  For example, when solving a linear system to determine , we can construct and row reduce an augmented matrix of the form   The augmented matrix X consists of two sub-matrices, A and , meaning that it can be viewed as a block matrix. Another application of a block matrix arises when using the SVD, which is a popular tool used in data science. The SVD uses a matrix, , of the form   Matrix D is a diagonal matrix, and each is a zero matrix. Representing in terms of sub-matrices helps us see what the structure of is. Another block matrix arises when introducing a procedure for computing the inverse of an matrix. To compute the inverse of matrix A , we construct and row reduce the matrix   This is an example of a block matrix used in an algorithm. In order to use block matrices in other applications we need to define matrix addition and multiplication with partitioned matrices.     If matrices A and B are partitioned in exactly the same way, then the entries of their sum is the sum of their blocks. For example, if A and B are the block matrices   then their sum is the matrix   As long as A and B are partitioned in the same way the addition is calculated block by block.     Recall the row column method for matrix multiplication.   Let be and be matrix. Then, the entry of is   This is the Row Column Method for matrix multiplication.  Partitioned matrices can be multiplied using this method, as if each block were a scalar provided each block has appropriate dimensions so that products are defined.     Block matrices can be useful in cases where a matrix has a particular structure.  For example, suppose is the block matrix   where and are matrices, is a zero matrix, and . Then   Computation of only requires computing and . Taking advantage of the block structure leads to a more efficient computation than it otherwise would have been with a naive row-column method that does not take advantage of the structure of the matrix.     and are the matrices   where   If we compute the matrix product using the given partitioning we obtain   where   Therefore   Computing with the row column method confirms our result.      In some cases, matrix partitioning can be used to give us convenient expressions for the inverse of a matrix. Recall that the inverse of matrix is a matrix , that has the same dimensions as and satisfies   where is the identity matrix. As we will see in the next example, we can use this equation to construct expressions for the inverse of a matrix.     Recall, using our formula for a 2 × 2 matrix,   provided that . Suppose , , and are invertible matrices. Suppose we wish to construct an expression for the inverse of the matrix   To construct the inverse of , we can write   where is the matrix we seek. If we let be the block matrix   we can determine by solving or . Solving gives us:    The above matrix equation gives us a set of four equations that can be solved to determine , , , and . The block in the second row and first column gives us . It was given that is an invertible matrix, so is a zero matrix because      Likewise the block in the second row and second column yields , so     Now that we have expressions for and we can solve the remaining two equations for and . Solving for gives us the following expression.       Solving for :      We now have our expression for :   Note that in the special case where that each of the blocks are scalars and our expression is equivalent to Equation (1.1).     In this section we used partitioned matrices to solve problems regarding matrix invertibility and matrix multiplication. Partitioned matrices can be multiplied using this method, as if each block were a scalar provided each block has appropriate dimensions so that products are defined. They can be used for example when dealing with large matrices that have a known structure where it is more convenient to describe the structure of a matrix in terms of its blocks. Although not part of this text, matrix partitioning can be used to help derive new algorithms because they give a more concise representation of a matrix and of operations on matrices.      Suppose . Which of the following could be equal to?  (a)  (b)  (c)     and are invertible matrices. Construct expressions for and in terms of and .     Suppose , and are invertible matrices, and   Give an expression for in terms of , , and .    "
},
{
  "id": "activity-1-1-worksheet-2-1",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "block matrix blocks submatrices "
},
{
  "id": "activity-1-1-worksheet-2-5",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "A "
},
{
  "id": "activity-1-1-worksheet-2-10",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "X A "
},
{
  "id": "activity-1-1-worksheet-2-12",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "D A "
},
{
  "id": "activity-1-1-worksheet-3-2",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "A B A B "
},
{
  "id": "activity-1-1-worksheet-3-6",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "A B "
},
{
  "id": "activity-1-1-worksheet-10-2",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-10-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Suppose . Which of the following could be equal to?  (a)  (b)  (c)  "
},
{
  "id": "activity-1-1-worksheet-10-3",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-10-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  and are invertible matrices. Construct expressions for and in terms of and .   "
},
{
  "id": "activity-1-1-worksheet-10-4",
  "level": "2",
  "url": "activity-1-1-worksheet.html#activity-1-1-worksheet-10-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Suppose , and are invertible matrices, and   Give an expression for in terms of , , and .  "
},
{
  "id": "activity-1-2-worksheet",
  "level": "1",
  "url": "activity-1-2-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "1.2 The LU Factorization",
  "body": " 1.2 The LU Factorization   To solve a linear system of the form we could use row reduction or, in theory, calculate and use it to determine with the equation   But computing requires the computation of the inverse of an matrix, which is especially difficult for large . It is more practical to solve with row reductions (i.e. Gaussian Elimination). But it turns out that there are more efficient methods, especially when is large.  One method for solving linear systems relies on what is referred to as a matrix factorization. A matrix factorization , or matrix decomposition is a factorization of a matrix into a product of matrices. Factorizations can be useful for solving , or for understanding the properties of a matrix.  In this section, we factor a matrix into lower and into upper triangular matrices to construct what is known as the LU factorization that is used to solve linear systems in a systematic and efficient method. Before we introduce the LU factorization, we will first need to introduce lower and upper triangular matrices.     Before we introduce the LU factorization, we need to first define upper and lower triangular matrices.   Suppose that the entries of matrix are . Then is upper triangular if for . Matrix is lower triangular if for .  As an example, all of the matrices below are in upper triangular form.   Notice how all of the entries below the main diagonal are zero, and the entries on and above the main diagonal can be anything. Likewise, examples of lower triangular matrices are below.   Again, note that our definition for an upper triangular matrix does not specify what the entries on or above the main diagonal need to be. Some or all of the entries above the main diagonal can, for example, be zero. Likewise the entries on and below the main diagonal of a lower triangular matrix do not have to have specific values.     After stating a theorem that gives the LU decomposition, we will give an algorithm for constructing the LU factorization. We will then see how we can use the factorization to solve a linear system.   If is an matrix that can be row reduced to echelon form without row exchanges, then , where is a lower triangular matrix with 1's on the diagonal, and is an echelon form of .     To prove the theorem above we will first show that we can write where is an invertible matrix, and is an echelon form of .  Suppose that matrix can be reduced to echelon form with elementary row operations that only add a multiple of a row to another row that is below it. Then each row operation can be performed by multiplying with elementary matrices.   If we let , then   Note that is invertible because elementary matrices are invertible. Therefore can be reduced to the identity with a sequence of row operations. Moreover, if we multiply Equation (1.3) by we obtain:   Therefore has the decomposition where is an echelon form of and is an invertible matrix. To show that is lower triangular, recall from Equations (1.2) and (1.3) that   Each elementary matrix is lower triangular because to reduce to we only used one type of row operation: adding a multiple of a row to a row below it, so each is a lower triangular matrix. It can also be shown that the product of two lower-triangular matrices is a lower triangular matrix, and the inverse of a lower triangular matrix is lower triangular. This implies that both and will be lower-triangular.     To construct the LU factorization of a matrix we must first apply a sequence of row operations to in order to reduce to . Equation (1.3) gives us that   But if , then the sequence of row operations that reduce to will reduce to . This gives us an algorithm for constructing the LU factorization.   Suppose is an matrix that can be row reduced to echelon form without row exchanges. To construct the LU factorization:  1. reduce to an echelon form by a sequence of row replacement operations, if possible  2. place entries in such that the sequence of row operations that reduces to will reduce to  Note that the above procedure will work for any matrix that can be reduced to echelon form without row exchanges. Meaning that we do not need to be square or invertible to construct its LU factorization.     In this example we construct LU factorizations of the following matrix.   Because is a matrix, the LU factorization has the form   Each represents an entry that we need to compute the value of. To reduce to we apply a sequence of row replacement operations as shown below.   Matrix is the echelon form of that we need for the LU factorization. We next construct so that the row operations that reduced to will reduce to . Our row operations were:   With these two row operations, we see that must be the matrix:   Note that the row operations and applied to will give us the identity. The LU factorization of is      Our motivation for introducing the LU factorization was to introduce an efficient method for solving linear systems. Given rectangular matrix and vector , we wish to use the LU factorization of to solve for . A procedure for doing so is below.   To solve for :  1. Construct the LU decomposition of to obtain and .  2. Set . Forward solve for in .  3. Backwards solve for in .     In this example we will solve the linear system given the LU decomposition of .   We first set and solve . Reducing the augmented matrix gives us:   Therefore, is the vector   We now solve .   The solution to the linear system, , is the vector      In our treatment of the LU factorization we constructed the LU decomposition using the following process.  1. reduce to an echelon form by a sequence of row replacement operations, if possible  2. place entries in such that the same sequence of row operations reduces to  There is much more to the LU factorization than what was presented in this section. There are for example other methods for constructing that you may encounter in future courses or projects you are working on. In our approach, the only row operation we use to construct and is to replace a row with a multiple of a row above it. Multiplying a row by a non-zero scalar is not needed, but more importantly, we cannot swap rows. More advanced linear algebra and numerical analysis courses would address this significant limitation.      Construct the LU Factorizations for the following matrices.  (a)  (b)  (c)    Show that the product of two lower triangular matrices is lower triangular.    Show that the inverse of an lower triangular matrix is also and lower triangular.    "
},
{
  "id": "activity-1-2-worksheet-2-4",
  "level": "2",
  "url": "activity-1-2-worksheet.html#activity-1-2-worksheet-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix factorization matrix decomposition "
},
{
  "id": "activity-1-2-worksheet-2-5",
  "level": "2",
  "url": "activity-1-2-worksheet.html#activity-1-2-worksheet-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower upper "
},
{
  "id": "activity-1-2-worksheet-3-4",
  "level": "2",
  "url": "activity-1-2-worksheet.html#activity-1-2-worksheet-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular lower triangular "
},
{
  "id": "activity-1-2-worksheet-11-2",
  "level": "2",
  "url": "activity-1-2-worksheet.html#activity-1-2-worksheet-11-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Construct the LU Factorizations for the following matrices.  (a)  (b)  (c)  "
},
{
  "id": "activity-1-2-worksheet-11-3",
  "level": "2",
  "url": "activity-1-2-worksheet.html#activity-1-2-worksheet-11-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Show that the product of two lower triangular matrices is lower triangular.  "
},
{
  "id": "activity-1-2-worksheet-11-4",
  "level": "2",
  "url": "activity-1-2-worksheet.html#activity-1-2-worksheet-11-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Show that the inverse of an lower triangular matrix is also and lower triangular.  "
},
{
  "id": "activity-1-3-worksheet",
  "level": "1",
  "url": "activity-1-3-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "1.3 The Leontif Input-Output Model",
  "body": " 1.3 The Leontif Input-Output Model   Input-output models are used in economics to model the inter-dependencies between different sectors of an economy. Wassily Leontief (1906-1999) is credited with developing the type of analysis that we explore in this chapter. His work on this model earned a Nobel Prize in Economics.  The input-output model assumes that there are sectors in an economy that produce a set of desired products to meet an external demand. The model also assumes that the sectors themselves will also demand a portion of the output that the sectors produce. If the sectors produce exactly the number of units to meet the external demand, then we have the equation  (sector output) − (internal consumption) = (external demand)  In this section we will see that this equation is a linear system that can be solved to determine the output the economy needs to produce to meet the external demand.     Suppose an economy that has two sectors: manufacturing (M) and energy (E). Both of the sectors produce an output to meet an external demand (D) for their products. Sectors M and E also require output from each other to produce their output. The way in which they do so is described in the diagram below.   Internal consumption diagram for sectors M and E.    The numbers in the above diagram can be interpreted as follows.  • For every 100 units that sector M creates, M requires 40 units from M and 10 units from E.  • For every 100 units that sector E creates, E requires 20 units from M and 30 units from E.  • An external demand (D) requires 4 units from M and 12 units from E.  In other words, if M were to create units, then M would consume units from M and units from E. The consumption from sector M could be represented with a vector.   Likewise, the consumption from sector E would be   Adding these vectors together gives us the total internal consumption from both sectors.   Matrix is called the consumption matrix . Typically its entries are between 0 and 1, and the sum of the entries in each column of will be less than 1. Vector is the output of the sectors. If the sectors produce exactly the number of units to meet the external demand, then we have the equation      In our example, vector , and . This simplifies Equation (1.6) to     This is a linear system with two equations, whose solution gives us the output vector that balances production with demand. Expressing the system as an augmented matrix and using row operations yields the solution as shown below.   The unique solution to this linear system is . This is the output that sectors M and E would need to produce to meet the external demand exactly.     Suppose an economy that has three sectors: X, Y, and Z. Each of these sectors produce an output to meet an external demand (D) for their products. The way in which they do so is described in the diagram below.   Internal consumption diagram for sectors X, Y, and Z.    The external demand, D, is requiring 24 units from X, 4 units from Y, and 16 units from Z. Our goal is to determine how many units the sectors need to produce in order to satisfy this demand, while also accounting for internal consumption.  If Sector X were to create units, then it would consume units from X and units from Y. This consumption could be represented by the vector   Likewise, the consumption from the other two sectors are   Adding these three vectors together gives us the total internal consumption from all sectors and the consumption matrix .   where , .  Each of the sectors in our economy are producing units to satisfy an external demand. The difference between the output and the internal consumption will represent the number of units produced to meet external demand.     If the sectors are to meet the needs of the external demand exactly, the demand would need to equal the number of units produced after internal consumption is taken into account. That is, we need that   This is a linear system that can be solved for the output vector, . This could be computed using an augmented matrix.   A helpful trick when reducing these matrices by hand is to multiply each row by 10 to make the algebra a bit less tedious. The above augmented matrix is in row reduced echelon form, and indicates that the desired output is       Consider the production model for an economy with two sectors, where , and .  (a) Construct the augmented matrix that can be used to calculate .  (b) Solve your linear system for .    A model for an economy consists of four sectors, W, X, Y, and Z, and an external demand, D. The relationships between them are given in the diagram below. Sector Z provides resources to the other sectors internally. There is no external demand from D for the output from Z.   Internal consumption diagram for sectors W, X, Y, and Z.    (a) Construct the augmented matrix which can be used to solve the system for the output that would meet the external demand exactly while accounting for internal consumption between the four sectors.  (b) Solve your augmented matrix to determine the desired output vector.    "
},
{
  "id": "leontief-me-figure",
  "level": "2",
  "url": "activity-1-3-worksheet.html#leontief-me-figure",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": " Internal consumption diagram for sectors M and E.   "
},
{
  "id": "activity-1-3-worksheet-3-14",
  "level": "2",
  "url": "activity-1-3-worksheet.html#activity-1-3-worksheet-3-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consumption matrix "
},
{
  "id": "leontief-xyz-figure",
  "level": "2",
  "url": "activity-1-3-worksheet.html#leontief-xyz-figure",
  "type": "Figure",
  "number": "2",
  "title": "",
  "body": " Internal consumption diagram for sectors X, Y, and Z.   "
},
{
  "id": "activity-1-3-worksheet-7-2",
  "level": "2",
  "url": "activity-1-3-worksheet.html#activity-1-3-worksheet-7-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Consider the production model for an economy with two sectors, where , and .  (a) Construct the augmented matrix that can be used to calculate .  (b) Solve your linear system for .  "
},
{
  "id": "activity-1-3-worksheet-7-3",
  "level": "2",
  "url": "activity-1-3-worksheet.html#activity-1-3-worksheet-7-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " A model for an economy consists of four sectors, W, X, Y, and Z, and an external demand, D. The relationships between them are given in the diagram below. Sector Z provides resources to the other sectors internally. There is no external demand from D for the output from Z.   Internal consumption diagram for sectors W, X, Y, and Z.    (a) Construct the augmented matrix which can be used to solve the system for the output that would meet the external demand exactly while accounting for internal consumption between the four sectors.  (b) Solve your augmented matrix to determine the desired output vector.  "
},
{
  "id": "sec-2d-computer-graphics",
  "level": "1",
  "url": "sec-2d-computer-graphics.html",
  "type": "Section",
  "number": "",
  "title": "1.4 2D Computer Graphics",
  "body": " 1.4 2D Computer Graphics   Linear transformations are often used in computer graphics to simulate the motion of an object. They can be modeled with a matrix-vector product of the form where is a vector that represents a point that is transformed to the vector . The matrix-vector product is a transformation that acts on the vector to produce a new vector, , and if we set the function to be then maps the vector to vector . The nature of the transform is described by matrix .  Translations are a type of transformation needed in computer graphics. But translations are not a linear transformation because they do not leave the origin fixed. How might we use matrix multiplication in order to perform such transformations? In this section we answer this question by introducing homogeneous coordinates, which allow for more general transformations to be computed with linear algebra.    Homogeneous Coordinates  Homogeneous coordinates are a tool that can be used to model translations.   Definition: Homogeneous Coordinates in  Each point in can be identified with the point , on the plane in that lies unit above the -plane.   For example, a translation of the form is a transformation. The parameters and adjust the location of the point after the transformation. This transform can be represented as a matrix multiplication with homogeneous coordinates in the following way. The first two entries can be extracted from the output of the transform to obtain the coordinate of the translated point. The following examples demonstrate how homogeneous coordinates can be used to create more general transforms.    Example 1: A Composite Transform with Translation  Suppose the transformation reflects points in across the line and then translates them by units in the direction and units in the direction. In this example we will use homogeneous coordinates to construct a matrix so that .  With homogeneous coordinates the point may be represented by the vector Points in can be reflected across the line using the standard matrix With homogeneous coordinates our point is represented with a vector in , so we use the block matrix The symbol denotes a matrix of zeroes. In this case, either a matrix or a matrix. Then the matrix-vector product below produces the needed transformation. Note that the and coordinates have been swapped, as required for the reflection through the line . The matrix below will perform the translation we need. The product below will apply the translation, of units in the direction and units in the direction, to the reflected point. Therfore, our standard matrix is     Example 2: Rotation About the Point  Triangle is determined by the points . Transform rotates these points by radians counterclockwise about the point . Our goal is to use matrix multiplication to determine the image of under .  A sketch of the triangle before and after the rotation is in the diagram below.     We need a way to calculate the locations of the points after the transformation. The rotation can be calculated by first representing each point by a vector in homogeneous coordinates, and then multiplying the vectors by a sequence of matrices that perform the needed transformation. The transformations will first shift the points in a way so that the rotation point is about the origin. We will then rotate about the origin by the desired about. And then we move the rotated points up by one unit to account for the initial translation.   Step 1: Shift Points Down by 1 Unit  In homogeneous coordinates our three points can be represented by the vectors below. Multiplying each vector by the matrix shifts the points down by one unit. Note the difference between the input and output vectors. The second entry of the output vectors is one less than their corresponding entries in the input vectors. Our translated triangle and rotation point is shown below.     With this transform, the rotation point also moves down one unit, from to the origin .    Step 2: Rotate About  Rotating the translated points by radians about the origin can be calculated by multiplying the three vectors by the matrix This gives us three new points.   Finally, to undo the initial translation that placed the rotation point at the origin, we need to translate our points up by one unit.    Step 3: Translate Points Up One Unit  Translating the data up by one unit can be accomplished by multiplying the three vectors by the matrix This gives us three new points.   Our rotated and translated triangle is shown below.     Therefore the standard matrix that performs a rotation by degrees about is the matrix Our result can be verified by calculating , , or .     Example 3: A Reflection Through The Line   In this example we construct the standard matrix, , that uses homogeneous coordinates to reflect points in across the line . We will confirm that our results are correct by calculating for any point that uses homogeneous coordinates.  The standard matrix will be the product of three matrices that translate and reflect points using homogeneous coordinates. The first matrix will translate points in some way so that the line about which we are reflecting will pass through the origin. We can use This matrix will shift points down three units so that the line will pass through the origin. Note that at this point we could have also used a matrix that, for example, shifts to the right by three units. The second matrix will reflect points through the shifted line, which is . Recall that the matrix will reflect vectors in through the line . This is because any point with coordinates can be represented with the vector and   The point is mapped to , which is a reflection through the line in . The standard matrix for this transformation in homogeneous coordinates is Our final transformation shifts points back up by three units to undo the initial translation. The standard matrix for the transformation that reflects points in across the line is We can check whether our work is correct by transforming any point with the above standard matrix. For example, the point is transformed by calculating The reflected point is . The line of reflection, initial point, and the reflected point are shown below.       The Data Matrix  The examples in this section have only involved a small number points that need to be transformed. For problems involving many points, it may be more convenient to represent the points in what we refer to as a data matrix . For example, the shape in the figure below is determined by five points, or vertices, . Their respective homogeneous coordinates can be stored in the columns of a matrix, . For our purposes, the order in which the points are placed into is arbitrary.     In the previous examples we applied a transform with a matrix-vector multiplication. With a data matrix we can use a similar approach. Recall that the product of two matrices and , is defined as where are the columns of . In other words, can perform the transformation on our data by computing , which transforms each column independently of the others.  For example, applying the transform in the previous example will reflect our shape through the line . The transformation is found by computing Extracting the first two entries of each column of the result gives us the transformed points (green), as shown in the figure below.       Exercises    Construct the standard matrices for the following transforms.     The standard matrix of the transform that reflects points in across the line .      The standard matrix of the transform that rotates points in about the point and then reflects points through the the line .      "
},
{
  "id": "subsec-data-matrix-2",
  "level": "2",
  "url": "sec-2d-computer-graphics.html#subsec-data-matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data matrix "
},
{
  "id": "ex-2d-graphics-standard-matrices",
  "level": "2",
  "url": "sec-2d-computer-graphics.html#ex-2d-graphics-standard-matrices",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Construct the standard matrices for the following transforms.     The standard matrix of the transform that reflects points in across the line .      The standard matrix of the transform that rotates points in about the point and then reflects points through the the line .    "
},
{
  "id": "sec-3d-computer-graphics",
  "level": "1",
  "url": "sec-3d-computer-graphics.html",
  "type": "Section",
  "number": "",
  "title": "3D Computer Graphics",
  "body": " 3D Computer Graphics   Results from the previous section on 2D graphics have a natural extension to three dimensions. In this section we extend the data matrix and homogeneous coordinates to three dimensions. This will allow us to model translations and composite transforms involving many points with matrix multiplication.    Rotations in 3D  Rotations about the origin are linear transforms. Because they are linear they can be expressed in the form where is a matrix, and we can obtain the columns of matrix by transforming the standard vectors We will use the convention that a positive rotation is in the counterclockwise direction when looking toward the origin from the positive half of the axis of rotation. For example, rotating about the -axis by radians results in the vector Transforming the first standard vector yields the first column of . Likewise the remaining columns can be found by transforming the other standard vectors. The third standard vector does not change under this transformation because it is parallel to the rotation axis. The standard matrix for a rotation about the -axis is A similar analysis gives us the standard matrices for rotations about the and the axes. Results are summarized in . The standard matrices in the table can be multiplied together to model transforms that perform multiple transformations. The next example demonstrates this application.   Standard matrices for 3D rotations about the coordinate axes.      rotation axis  standard matrix    -axis       -axis       -axis          Example 1: 3D Rotations  Suppose that the transform first rotates points in about the -axis by radians and then rotates points about the -axis by radians. We can determine the standard matrix, , for this transform in a few different ways. One approach is to use the standard matrices in . The standard matrix, , is the product of two rotation matrices. Note that the rotation about the -axis is applied before the rotation about the -axis, which determines the multiplication order. The standard matrix for the first transformation is placed in the rightmost position.  We could also obtain the same result by transforming the standard vectors, because . The first standard vector gives us the first column of . This result agrees with our result obtained above by multiplying rotation matrices together. Note also that our convention is that a positive rotation is in the counterclockwise direction when looking toward the origin from the positive half of the axis of rotation.    The Data Matrix for 3D Transforms  Similar to the 2D case, for problems involving many points it is convenient to represent the points a data matrix. Analogous to our approach in 2D, points in can be represented in a matrix whose columns are vectors that correspond to the points we wish to transform. We may transform this matrix with a matrix-vector multiplication. Recall that the product of two matrices and , is defined as where are the columns of . In other words, can perform the transformation on our data by computing , which transforms each column independently of the others. The following example demonstrates this approach.    Example 2: A Projection in 3D with the Data Matrix   Corners of a cube with side length 1.                                     Data in Table ( ) define a cube in with side length 1. Suppose the linear transform projects points in onto the -plane. In this example we will construct the matrix, , that is the standard matrix of the transformation .  The data in Table ( ) (blue) and its projection (green) are shown Figure ( ).   Data from Table ( ) and its projection onto the -plane.      Because the given transform that we are dealing with in this example is linear, we can express the transform in the form of a matrix-vector product where is a matrix. Moreover, because we are working with a linear transform, each column of is equal to the product and is a standard vector. For example, the first column of can be found using , which is the vector Projecting onto the -plane does not change the vector, because the vector is already in that plane. The first column of is . Likewise, the second column of is , becuase is also already in the -plane. The last column of is the projection of onto the plane, which is the zero vector. Combining our results for each column of gives us the standard matrix. Now that we have the standard matrix for this transform, we can use it to transform the data in Table 1. Representing each point as a vector in and placing the vectors in a data matrix, , will allow us to compute the projection using a matrix multiplication. Our matrix is The transformed points can be computed as follows. Extracting the columns of the product gives us the projected points.    3D Homogeneous Coordinates  Homogeneous coordinates in 3D are analogous to the homogeneous 2D coordinates we introduced in the previous section.   Homogeneous Coordinates in   are homogeneous coordinates for in    A translation of the form can be represented as a matrix multiplication with homogeneous coordinates:    Example 3: A Translation in 3D  The data in Table ( ) can be translated using a homogeneous coordinate system. The data matrix in homogeneous coordinates would be The transform that, for example, shifts the data by units in the direction and by 1 unit in the -direction is The figure below shows the original data (blue) and its translated version (green).        Exercises    Construct the standard matrices for the following transforms.     The standard matrix of the transform that uses homogeneous coordinates to reflect points in across the plane , where is any real number.      The standard matrix of the transform that reflects points in across the plane .      The standard matrix of the transform that first rotates points in about the -axis by an angle and then projects them onto the -plane.       Line passes through the point and is parallel to the vector , where Construct the matrix that uses homogeneous coordinates to rotate points in about line by an angle .     "
},
{
  "id": "tab-3d-rotations",
  "level": "2",
  "url": "sec-3d-computer-graphics.html#tab-3d-rotations",
  "type": "Table",
  "number": "4",
  "title": "Standard matrices for 3D rotations about the coordinate axes.",
  "body": " Standard matrices for 3D rotations about the coordinate axes.      rotation axis  standard matrix    -axis       -axis       -axis       "
},
{
  "id": "tab-cube",
  "level": "2",
  "url": "sec-3d-computer-graphics.html#tab-cube",
  "type": "Table",
  "number": "5",
  "title": "Corners of a cube with side length 1.",
  "body": " Corners of a cube with side length 1.                                    "
},
{
  "id": "fig-cube-projection",
  "level": "2",
  "url": "sec-3d-computer-graphics.html#fig-cube-projection",
  "type": "Figure",
  "number": "6",
  "title": "",
  "body": " Data from Table ( ) and its projection onto the -plane.     "
},
{
  "id": "ex-3d-standard-matrices",
  "level": "2",
  "url": "sec-3d-computer-graphics.html#ex-3d-standard-matrices",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Construct the standard matrices for the following transforms.     The standard matrix of the transform that uses homogeneous coordinates to reflect points in across the plane , where is any real number.      The standard matrix of the transform that reflects points in across the plane .      The standard matrix of the transform that first rotates points in about the -axis by an angle and then projects them onto the -plane.    "
},
{
  "id": "ex-3d-rotate-about-line",
  "level": "2",
  "url": "sec-3d-computer-graphics.html#ex-3d-rotate-about-line",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Line passes through the point and is parallel to the vector , where Construct the matrix that uses homogeneous coordinates to rotate points in about line by an angle .   "
},
{
  "id": "activity-1-1-4-worksheet",
  "level": "1",
  "url": "activity-1-1-4-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "1.1.4 Example 2: Computing AB",
  "body": " 1.1.4 Example 2: Computing AB   and are the matrices   where   If we compute the matrix product using the given partitioning we obtain   where   Therefore   Computing with the row column method confirms our result.    "
},
{
  "id": "activity-1-1-5-worksheet",
  "level": "1",
  "url": "activity-1-1-5-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "1.1.5 Block Matrix Inversion",
  "body": " 1.1.5 Block Matrix Inversion   In some cases, matrix partitioning can be used to give us convenient expressions for the inverse of a matrix. Recall that the inverse of matrix is a matrix , that has the same dimensions as and satisfies   where is the identity matrix. As we will see in the next example, we can use this equation to construct expressions for the inverse of a matrix.   "
},
{
  "id": "activity-1-1-6-worksheet",
  "level": "1",
  "url": "activity-1-1-6-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "1.1.6 Example 3: Expression for Inverse of a Block Matrix",
  "body": " 1.1.6 Example 3: Expression for Inverse of a Block Matrix   Recall, using our formula for a 2 × 2 matrix,   provided that . Suppose , , and are invertible matrices. Suppose we wish to construct an expression for the inverse of the matrix   To construct the inverse of , we can write   where is the matrix we seek. If we let be the block matrix   we can determine by solving or . Solving gives us:    The above matrix equation gives us a set of four equations that can be solved to determine , , , and . The block in the second row and first column gives us . It was given that is an invertible matrix, so is a zero matrix because      Likewise the block in the second row and second column yields , so     Now that we have expressions for and we can solve the remaining two equations for and . Solving for gives us the following expression.       Solving for :      We now have our expression for :   Note that in the special case where that each of the blocks are scalars and our expression is equivalent to Equation (1.1).   "
},
{
  "id": "section-orthogonal-diagonalization",
  "level": "1",
  "url": "section-orthogonal-diagonalization.html",
  "type": "Section",
  "number": "",
  "title": "2.1 Orthogonal Diagonalization",
  "body": " 2.1 Orthogonal Diagonalization  Many algorithms rely on a type of matrix that is equal to its transpose. If matrix satisfies , then is symmetric . A common example of a symmetric matrix is the product , where is any matrix. We use when, for example, constructing the normal equations in least-squares problems. One way to see that is symmetric for any matrix is to take the transpose of .  is equal to its transpose so it must be symmetric. But another way to see that is symmetric is that for any rectangular matrix with columns , is to express the matrix product using the row-column rule for matrix multiplication.     Note that is the dot product between and . And because dot products commute, in other words  is symmetric.  One of the reasons that symmetric matrices are found in many algorithms is that they posses several properties that we can use to make useful or efficient calculations. In this section we investigate some of these properties that symmetric matrices have. In later sections of this chapter we will use these properties to develop and understand algorithms and their results.   Properties of Symmetric Matrices  In this section we give three theorems that characterize symmetric matrices.   1) Symmetric Matrices Have Orthogonal Eigenspaces  The eigenspaces of symmetric matrices have a useful property that we can use when, for example, diagoanlizing a matrix.   Theorem   If is a symmetric matrix, with eigenvectors and corresponding to two distinct eigenvalues, then and are orthogonal.    More generally this theorem implies that eigenspaces associated to distinct eigenvalues are orthogonal subspaces.   Our approach will be to show that if is symmetric then any two of its eigenvectors and must be orthogonal when their corresponding eigenvalues and are not equal to each other.   Rearranging the equation yields   But so . In other words, eigenvectors corresponding to distinct eigenvalues must be orthogonal.   This theorem can be sometimes be used to quickly identify the eigenvectors of a matrix. For example, if is a matrix and we know that is an eigenvector of , then we can find any non-zero vector orthogonal to to identify the eigenvector for the other eigenspace.    2) The Eigenvalues of a Symmetric Matrix are Real   Theorem   If is a real symmetric matrix then all eigenvalues of are real.    A proof of this result is in Appendix 1.2.    3) The Spectral Theorem  It turns out that every real symmetric matrix can always be diagonalized using an orthogonal matrix, which is a result of the spectral theorem.   The Spectral Theorem   An matrix is symmetric if and only if the matrix can be orthogonally diagonalized.    A proof of this theorem is beyond the scope of these notes, but there are several important consequences of this theorem. All symmetric matrices can not only be diagonalized, but they can be diagonalized with an orthogonal matrix. Moreover, the only matrices that can be diagonalized orthogonally are symmetric, and that if a matrix can be diagonalized with an orthogonal matrix, then it is symmetric.     Examples   Example 1: Orthogonal Diagonalization of a Matrix  Suppose is the symmetric matrix below.   The eigenvalues of are given. In this example we will diagonalize using an orthogonal matrix, . For eigenvalue we have A vector in the null space of is the eigenvector   A vector orthogonal to is which must be an eigenvector for because is symmetric.  Dividing each of the eigenvectors by their respective length, and then collecting these unit vectors into a single matrix, , we obtain an orthogonal matrix. In other words, . This convenient property gives us a convenient way to compute should it be needed.  Placing the eigenvalues of in the order that matches the order used to create , we obtain the factorization     Example 2: Orthogonal Diagonalization of a Matrix  In this example we will diagonalize a matrix, , using an orthogonal matrix, .   The eigenvalues of are given. For eigenvalue we have A vector in the null space of is the eigenvector For eigenvalue we have By inspection, two vectors in the null space of are   There are many other choices that we could make but the above two vectors will suffice. Note that and happen to be orthogonal to each other. If they happened to not be orthogonal, one could use the Gram-Schmidt procedure to make them so.  Dividing each of the three eigenvectors by their respective length, and then collecting these unit vectors into a single matrix, , we obtain an orthogonal matrix. This will give us a matrix whose inverse is equal to its transpose. In other words, is an orthogonal matrix, and . This convenient property gives us a convenient way to compute should it be needed.  Placing the eigenvalues of in the order that matches the order used to create , we obtain the factorization      Summary  In this section we explored how we might construct an orthogonal diagonalization of a symmetric matrix, . Note that when a symmetric matrix has a repeated eigenvalue, Gram-Schmidt may be needed when eigenvalues are repeated to construct a full set of orthonormal eigenvectors that span . The theorems we introduced in this section gives us that   all eigenvalues of are real  eigenspaces of are mutually orthogonal  can be diagonalized as     Exercises    Suppose and are matrices, , and is symmetric. Which of the following products are equal to a symmetric matrix?           If where is a diagonal matrix and , then is symmetric?     "
},
{
  "id": "section-orthogonal-diagonalization-2",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#section-orthogonal-diagonalization-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "theorem-orthogonal-eigenspaces",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#theorem-orthogonal-eigenspaces",
  "type": "Theorem",
  "number": "7",
  "title": "Theorem.",
  "body": " Theorem   If is a symmetric matrix, with eigenvectors and corresponding to two distinct eigenvalues, then and are orthogonal.   "
},
{
  "id": "subsubsection-orthogonal-eigenspaces-5",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#subsubsection-orthogonal-eigenspaces-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Our approach will be to show that if is symmetric then any two of its eigenvectors and must be orthogonal when their corresponding eigenvalues and are not equal to each other.   Rearranging the equation yields   But so . In other words, eigenvectors corresponding to distinct eigenvalues must be orthogonal.  "
},
{
  "id": "theorem-real-eigenvalues",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#theorem-real-eigenvalues",
  "type": "Theorem",
  "number": "8",
  "title": "Theorem.",
  "body": " Theorem   If is a real symmetric matrix then all eigenvalues of are real.   "
},
{
  "id": "theorem-spectral-theorem",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#theorem-spectral-theorem",
  "type": "Theorem",
  "number": "9",
  "title": "The Spectral Theorem.",
  "body": " The Spectral Theorem   An matrix is symmetric if and only if the matrix can be orthogonally diagonalized.   "
},
{
  "id": "example-2x2-orthogonal-diagonalization",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#example-2x2-orthogonal-diagonalization",
  "type": "Example",
  "number": "10",
  "title": "Example 1: Orthogonal Diagonalization of a <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrix.",
  "body": " Example 1: Orthogonal Diagonalization of a Matrix  Suppose is the symmetric matrix below.   The eigenvalues of are given. In this example we will diagonalize using an orthogonal matrix, . For eigenvalue we have A vector in the null space of is the eigenvector   A vector orthogonal to is which must be an eigenvector for because is symmetric.  Dividing each of the eigenvectors by their respective length, and then collecting these unit vectors into a single matrix, , we obtain an orthogonal matrix. In other words, . This convenient property gives us a convenient way to compute should it be needed.  Placing the eigenvalues of in the order that matches the order used to create , we obtain the factorization   "
},
{
  "id": "example-3x3-orthogonal-diagonalization",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#example-3x3-orthogonal-diagonalization",
  "type": "Example",
  "number": "11",
  "title": "Example 2: Orthogonal Diagonalization of a <span class=\"process-math\">\\(3\\times3\\)<\/span> Matrix.",
  "body": " Example 2: Orthogonal Diagonalization of a Matrix  In this example we will diagonalize a matrix, , using an orthogonal matrix, .   The eigenvalues of are given. For eigenvalue we have A vector in the null space of is the eigenvector For eigenvalue we have By inspection, two vectors in the null space of are   There are many other choices that we could make but the above two vectors will suffice. Note that and happen to be orthogonal to each other. If they happened to not be orthogonal, one could use the Gram-Schmidt procedure to make them so.  Dividing each of the three eigenvectors by their respective length, and then collecting these unit vectors into a single matrix, , we obtain an orthogonal matrix. This will give us a matrix whose inverse is equal to its transpose. In other words, is an orthogonal matrix, and . This convenient property gives us a convenient way to compute should it be needed.  Placing the eigenvalues of in the order that matches the order used to create , we obtain the factorization   "
},
{
  "id": "exercise-symmetric-products",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#exercise-symmetric-products",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose and are matrices, , and is symmetric. Which of the following products are equal to a symmetric matrix?        "
},
{
  "id": "exercise-pdpt-symmetric",
  "level": "2",
  "url": "section-orthogonal-diagonalization.html#exercise-pdpt-symmetric",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If where is a diagonal matrix and , then is symmetric?   "
},
{
  "id": "section-quadratic-forms",
  "level": "1",
  "url": "section-quadratic-forms.html",
  "type": "Section",
  "number": "",
  "title": "2.2 Quadratic Forms",
  "body": " 2.2 Quadratic Forms  Does this inequality hold for all real values of and ?   Were it not for the term we could immediately tell that this statement is true. Because if the expression was , we would more easily see that this can never be negative for any real values of and . But could their sum ever be less than ? Because if it is, then would be negative and the inequality would not be true.  After introducing some theory and procedures we will circle back to this motivating problem. Our first step will be to draw a connection to quadratic forms, which allow us to study the above inequality in more general context.   Quadratic Forms  A quadratic form is a function , given by   Matrix is and symmetric and is a vector of variables. If we represent quadratic forms using a symmetric matrix, we can take advantage of their properties to solve problems like the one given at the start of this article. First lets explore a few example of quadratic forms so that we have a better understanding of what they are.   Example 1: Quadratic forms in  In this example we consider the general quadratic form in two variables, , with    is symmetric, so we have , and   A particular example of a quadratic form familiar to many reading this section would be   Setting equal to a constant generates a set of points that create a circle with radius . Two examples are shown in the diagram below.   Two circles generated by for and .      Other choices of and the entries in will create other curves in . For example, with   generates a set of equations the form , because   If we set we obtain the ellipse below.   The ellipse generated by .        Example 2: A Quadratic Form  In this example we express in the form , where and . Placing coefficients of and on the main diagonal, and dividing coefficient of by 2, we obtain   We can verify this result by multiplying .    Example 3: Quadratic Form in Three Variables  Write in the form for .   Note that we can write as   Taking a similar approach to the previous exercise, we obtain   Again, we can verify this result by multiplying .     Principle Axes Theorem  One of the problems we will explore later in this course involves determining the points on a curve of the form that are closest or furthest from the origin. This particular problem will be aided with the Principal Axes Theorem.   Theorem   If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.    The proof of this theorem relies on the fact that is a symmetric matrix and therefore can be diagonalized using an orthogonal matrix.   Given , where is a variable vector and is a real symmetric matrix. Then we can write   where is an orthogonal matrix. A change of variable can be represented as   With this change of variable, the quadratic form becomes   Thus, is expressed without cross-product terms because is a diagonal matrix.     Example 4: Change of Variable  Consider the quadratic form   The eigenvalues and eigenvectors of are given below.   We will identify a change of variable that removes the cross-product term. Our change of variable is   Using this change of variable, .  If, for example, we set , we obtain two curves in . One curve is -plane, the other in the -plane.   The ellipse in the -plane, and the same ellipse expressed without cross terms, , in the -plane.           Our change of variable can simplify our analysis. For example, in the -plane we can more easily identify points on the ellipse that are closest\/furthest from the origin, and determine whether can take on negative\/positive values.    Example 5: Inequality  We can now return to our motivating question from the start of this section. Does hold for all ?  To answer this question we set .   The characteristic polynomial is . The eigenvalues therefore are and . Note that to quickly check that these numbers are, in fact, the eigenvalues of , we could check whether and are singular.  Knowing the eigenvalues of , we find that   We see that can be zero when , but is never negative. So the inequality is true.    Summary  We saw how we can express quadratic forms in the form , for . In this section we introduced a representation of quadratic forms with symmetric matrices. We saw how we can express quadratic forms in the form , for without cross-product terms. We gave a change of variable to represent quadratic forms without cross-product terms and used the Principle Axis Theorem to investigate inequalities involving quadratic forms.  Another one of the reasons we are interested in quadratic forms is because they can be used to describe linear transforms. Consider the transform . The squared length of the vector is a quadratic form.   Because is symmetric, we can use symmetric matrices and their properties to characterize linear transforms. Later in this course we will explore this connection.   "
},
{
  "id": "subsection-quadratic-forms-def-2",
  "level": "2",
  "url": "section-quadratic-forms.html#subsection-quadratic-forms-def-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic form "
},
{
  "id": "figure-two-circles",
  "level": "2",
  "url": "section-quadratic-forms.html#figure-two-circles",
  "type": "Figure",
  "number": "12",
  "title": "",
  "body": " Two circles generated by for and .     "
},
{
  "id": "figure-single-ellipse",
  "level": "2",
  "url": "section-quadratic-forms.html#figure-single-ellipse",
  "type": "Figure",
  "number": "13",
  "title": "",
  "body": " The ellipse generated by .     "
},
{
  "id": "theorem-principal-axes",
  "level": "2",
  "url": "section-quadratic-forms.html#theorem-principal-axes",
  "type": "Theorem",
  "number": "14",
  "title": "Theorem.",
  "body": " Theorem   If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.   "
},
{
  "id": "subsection-principal-axes-theorem-5",
  "level": "2",
  "url": "section-quadratic-forms.html#subsection-principal-axes-theorem-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Given , where is a variable vector and is a real symmetric matrix. Then we can write   where is an orthogonal matrix. A change of variable can be represented as   With this change of variable, the quadratic form becomes   Thus, is expressed without cross-product terms because is a diagonal matrix.  "
},
{
  "id": "figure-change-of-variable-ellipses",
  "level": "2",
  "url": "section-quadratic-forms.html#figure-change-of-variable-ellipses",
  "type": "Figure",
  "number": "15",
  "title": "",
  "body": " The ellipse in the -plane, and the same ellipse expressed without cross terms, , in the -plane.          "
},
{
  "id": "section-constrained-optimization",
  "level": "1",
  "url": "section-constrained-optimization.html",
  "type": "Section",
  "number": "",
  "title": "2.3.1 Constrained Optimization",
  "body": " 2.3.1 Constrained Optimization  Symmetric matrices can be found in certain optimization problems involving quadratic functions. By applying some of the properties that symmetric matrices have, we can develop algorithms and theorems to better understand and also solve these optimization problems. The following example demonstrates how symmetric matrices might arise in an optimization problem.   Example 1: Temperature on a Unit Sphere  Suppose that the temperature, , on the surface of the sphere, whose radius is one, is given by   Our goals are to determine the location of the largest and smallest values of on the surface of the sphere, and what the temperature is at these points. To do this, we can first identify the largest value of on the sphere.   Note that we are only considering points on the surface of the sphere, so . Notice also, by inspection, that is equal to 9 at the points . We now have both the maximum value of and where the maximum values of are located. Therefore,   A similar analysis yields the minimum value of .   The diagram below shows our unit sphere, colored in a way that gives the temperature of the sphere, with the hottest points being red, and the coldest points being blue.   The unit sphere colored according to the temperature , with the hottest points in red and the coldest points in blue.      Note that the hottest points are given by the points and the coldest points at . You may have also noticed that the maximum and minimum values of coincide with the eigenvalues of . We will explore this connection in the next section.    A Constrained Optimization Problem  We will now turn our attention to a more general problem of optimizing a function, , on a unit sphere. That is, we wish to identify the maximum or minimum values of   subject to . This is an example of a constrained optimization problem. Also note that we may also want to know where these extreme values are obtained. The following theorem gives us some insight on how these values can be obtained.   Constrained Optimization   If , is a real symmetric matrix, with eigenvalues   and associated normalized eigenvectors . Then, subject to the constraint , the maximum value of is , which is attained at . The minimum value of is , which is attained at .     Suppose is the largest eigenvalue of and is the corresponding unit eigenvector.   This means that is at most . But at because     Example 2: Constrained Optimization with a Repeated Eigenvalue  In this example we will calculate the maximum and minimum values of , , subject to , and identify points where these values are obtained.  For , we have   By inspection, has eigenvalues (don't forget that an eigenvalue, , is a number that makes singular). For ,   Because is symmetric, the eigenvector for eigenvalue must be orthogonal to and . So by inspection   Therefore, the minimum value of is , and is obtained at . The maximum value of is , which is obtained at any unit vector in the span of and .  The image below is the unit sphere whose surface is colored according to the quadratic from the previous example. Notice the agreement between our solution and the image.   Left: the unit sphere colored according to . Right: the eigenvectors , , and .              Orthogonality Constraints  Another useful constraint that we will use when constructing the singular value decomposition of a matrix involves orthogonality.   Optimization with an Orthogonality Constraint   Suppose , where is symmetric and has eigenvalues and associated normalized eigenvectors . Then, subject to the constraints and , the maximum value of is , which is attained at . The minimum value of is , which is attained at .    A proof would go beyond the scope of what we need for these notes, but it could use a similar approach to the theorem that gives the maximum (or minimum) of subject to . We could start the proof with a change of variable so that we could express using a diagonal matrix and an orthonormal basis for . We could then identify the second largest eigenvalue. The associated eigenvector would be orthogonal to the eigenvector associated with the largest eigenvalue.   Example 3: Optimization with an Orthogonality Constraint  In this example our goal is to identify the maximum value of   where , and its eigenvalues are   and is the eigenvector associated with , where   The eigenvector associated with is found using the usual process of finding a vector in the nullspace of .   By inspection, a vector in the nullspace will be   But we need to satisfy the constraint , so we will need to normalize our eigenvector to ensure that it has length one. Our unit eigenvector is   This eigenvector gives one location where the maximum value of is obtained, with the constraints   The two locations where this maximum are obtained are and . Evaluating at either of these points will give us .  The image below is the unit sphere whose surface is colored according to the quadratic from this example.   The unit sphere colored according to , with the eigenvectors and marked.      The set of unit vectors that are orthogonal to creates a circle, and the point on that circle with the largest value of corresponds to .    Example 4: Optimization with an Orthogonality Constraint, a Repeated Eigenvalue Case  In this example we will identify the maximum value of , , subject to and to , where   Noting that this example uses the same quadratic as in Example 2, we know that is an eigenvector associated with the largest eigenvalue, . The next largest eigenvalue is , which was a repeated eigenvalue. Any unit vector in the span of and is also an eigenvector with eigenvalue . If, for example, is a unit vector in the span of and , then and will be orthogonal to . Therefore the maximum value of , subject to and to is .     Summary  In this section we introduced two constrained optimization problems. Our first problems was to identify the maximum\/minimum values (and where they are located) of   We saw that the maximum\/minimum values are given by eigenvalues of , and that the locations of these extreme values are given by the unit eigenvectors of .  We then explored a related constrained optimization problem. We extended our results from the previous constrained optimization problem to identify the maximum\/minimum values of , and where they are located, subject to two constraints. If, for example, is the eigenvector corresponding to the largest eigenvalue, then our goal was to optimize   Again we saw that the maximum\/minimum values are given by eigenvalues of . And we saw that the corresponding locations of these extreme values are given by unit eigenvectors of , but that we needed to use the second largest eigenvalue. These results could then be extended to handle cases with repeated eigenvalues, to add additional orthogonality constraints, or to identify minimum values of with orthogonality constraints.  Students who have already completed a multivariable calculus course may recognize constrained optimization problems when working with Lagrange Multipliers , which would give a more general framework to approach constrained optimization problems. Lagrange Multipliers are not explored in this particular course. But we will make use of the results in this section when developing the singular value decomposition (SVD) of a matrix.   "
},
{
  "id": "figure-temperature-sphere",
  "level": "2",
  "url": "section-constrained-optimization.html#figure-temperature-sphere",
  "type": "Figure",
  "number": "16",
  "title": "",
  "body": " The unit sphere colored according to the temperature , with the hottest points in red and the coldest points in blue.     "
},
{
  "id": "subsection-constrained-optimization-problem-4",
  "level": "2",
  "url": "section-constrained-optimization.html#subsection-constrained-optimization-problem-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constrained optimization "
},
{
  "id": "theorem-constrained-optimization",
  "level": "2",
  "url": "section-constrained-optimization.html#theorem-constrained-optimization",
  "type": "Theorem",
  "number": "17",
  "title": "Constrained Optimization.",
  "body": " Constrained Optimization   If , is a real symmetric matrix, with eigenvalues   and associated normalized eigenvectors . Then, subject to the constraint , the maximum value of is , which is attained at . The minimum value of is , which is attained at .   "
},
{
  "id": "subsection-constrained-optimization-problem-6",
  "level": "2",
  "url": "section-constrained-optimization.html#subsection-constrained-optimization-problem-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose is the largest eigenvalue of and is the corresponding unit eigenvector.   This means that is at most . But at because   "
},
{
  "id": "figure-repeated-eigenvalue-sphere",
  "level": "2",
  "url": "section-constrained-optimization.html#figure-repeated-eigenvalue-sphere",
  "type": "Figure",
  "number": "18",
  "title": "",
  "body": " Left: the unit sphere colored according to . Right: the eigenvectors , , and .          "
},
{
  "id": "theorem-orthogonality-constraint",
  "level": "2",
  "url": "section-constrained-optimization.html#theorem-orthogonality-constraint",
  "type": "Theorem",
  "number": "19",
  "title": "Optimization with an Orthogonality Constraint.",
  "body": " Optimization with an Orthogonality Constraint   Suppose , where is symmetric and has eigenvalues and associated normalized eigenvectors . Then, subject to the constraints and , the maximum value of is , which is attained at . The minimum value of is , which is attained at .   "
},
{
  "id": "figure-orthogonality-constraint-sphere",
  "level": "2",
  "url": "section-constrained-optimization.html#figure-orthogonality-constraint-sphere",
  "type": "Figure",
  "number": "20",
  "title": "",
  "body": " The unit sphere colored according to , with the eigenvectors and marked.     "
},
{
  "id": "subsection-constrained-optimization-summary-7",
  "level": "2",
  "url": "section-constrained-optimization.html#subsection-constrained-optimization-summary-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "locations "
},
{
  "id": "subsection-constrained-optimization-summary-8",
  "level": "2",
  "url": "section-constrained-optimization.html#subsection-constrained-optimization-summary-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange Multipliers "
},
{
  "id": "section-quadratic-surfaces",
  "level": "1",
  "url": "section-quadratic-surfaces.html",
  "type": "Section",
  "number": "",
  "title": "2.3.2 Quadratic Surfaces",
  "body": " 2.3.2 Quadratic Surfaces  In a previous section of these notes we encountered situations where we want to minimize or maximize a quadratic function of the form   where is symmetric. Then the set of that satisfies Equation We were also interested in additional constraints on what could be. These sorts of problems are encountered, for example, when constructing the singular value decomposition of a matrix, which we will get to soon. Either way, to help us understand thes2e constrained optimization problems it can be helpful to have a geometric interpretation of what Equation represents. The interpretations and terminology we introduce in this section can help us describes the shape of and solve optimization problems related to it.   Example 1: A Quadratic Surface in  For a fixed , Equation will define a curve in . For example, if   then the points that satisfy   generates a curve in . The diagram below shows a set of curves for equal to 2 and to 8. As we vary the value of , the size of our curve will change. In general, when we increase the value of , the curve gets larger and points on the curve get further away from the origin. As we decrease , the opposite happens: the curve gets smaller and points on the curve get closer to the origin.   Curves generated by .      If we consider many values of we would generate many more curves in . The curves could also be displayed in , with one of the axes corresponding to . In fact, if we allow to vary continuously, would give us a surface in , which is shown in .   The surface .    Those familiar with MATLAB may be surprised that the above surface can be generated using only a few lines of code. The script that was used to create is below. The code uses the fimplicit3 function.   MATLAB Script   fimplicit3(@(x,y,Q) Q-2*y.^2-2*x.^2-2*x.*y) xlabel('x') ylabel('y') zlabel('Q') set(gcf,'color','w'); % sets background color to white set(gca,'FontSize',18) % increases font size to 18    Most of the code above was used to format the diagram. The MATLAB fimplicit3 function plots the three dimensional implicit function defined by over a default interval of for input values of . By rearranging Equation we can obtain which is the form that MATLAB needs for fimplicit3.    Example 2: Quadratic Surfaces  The entries of in Equation will determine the shape of a quadratic surface that it creates. Several examples are shown in the figures below.   Quadratic surfaces generated by four different choices of .                       Notice how some surfaces will have a maximum or minimum value. and have a minimum value of . Whereas the form shown in has a maximum value .    Classifying Quadratic Forms  Quadratic functions of the form can be classified based on the values that can have.   Definition   A quadratic form is   positive definite if for all .  negative definite if for all .  positive semidefinite if for all .  negative semidefinite if for all .  indefinite if takes on positive and negative values for .     That these categories are not mutually exclusive. A form can, for example, be both positive definite and positive semidefinite. The following theorem allows us to classify a form based on the eigenvalues of the matrix of the quadratic form.   Theorem   If is a symmetric matrix with eigenvalues , then is   positive definite when all eigenvalues are positive  positive semidefinite when all eigenvalues are non-negative  negative definite when all eigenvalues are negative  negative semidefinite when all eigenvalues are non-positive  indefinite when at least one eigenvalue is negative and at least one eigenvalue is positive      If is symmetric, we can write and set , so , and   The entries of are . Note that is always non-negative, so for , the sign of will only depend on the values of . This implies, for example that when for all , that is positive definite.     Example 3: Quadratic Forms and Eigenvalues  Consider the quadratic form   The matrix of this quadratic form is   Calculating its eigenvalues reveals that . Because the eigenvalues are both positive and negative, our quadratic form is indefinite. Indeed, when we plot this surface using MATLAB, we see that the surface does have values that are both positive and negative.   The indefinite quadratic surface generated by .      Summary  In this section we explored geometric interpretations of the quadratic form   where is symmetric. Then the set of that satisfies this equation create a surface. The surface, , could have a minimum or maximum value that may or may not be unique. If all the eigenvalues of are known, we have seen how we can characterize the extreme values of a quadratic form give by .  Those students who have encountered quadratic surfaces in a multivariable calculus course may have already seen the forms discussed in this section from a different perspective. In such a course students may also consider more general quadratic surfaces of the form   Such forms can be used to create ellipsoids, cylinders, and other useful shapes that are studied in calculus, but go beyond the scope of this course.   "
},
{
  "id": "figure-parab-curves",
  "level": "2",
  "url": "section-quadratic-surfaces.html#figure-parab-curves",
  "type": "Figure",
  "number": "21",
  "title": "",
  "body": " Curves generated by .     "
},
{
  "id": "figure-paraboloid",
  "level": "2",
  "url": "section-quadratic-surfaces.html#figure-paraboloid",
  "type": "Figure",
  "number": "22",
  "title": "",
  "body": " The surface .   "
},
{
  "id": "listing-matlab-script",
  "level": "2",
  "url": "section-quadratic-surfaces.html#listing-matlab-script",
  "type": "Listing",
  "number": "23",
  "title": "MATLAB Script",
  "body": " MATLAB Script   fimplicit3(@(x,y,Q) Q-2*y.^2-2*x.^2-2*x.*y) xlabel('x') ylabel('y') zlabel('Q') set(gcf,'color','w'); % sets background color to white set(gca,'FontSize',18) % increases font size to 18   "
},
{
  "id": "figure-quad-surfaces-grid",
  "level": "2",
  "url": "section-quadratic-surfaces.html#figure-quad-surfaces-grid",
  "type": "Figure",
  "number": "24",
  "title": "",
  "body": " Quadratic surfaces generated by four different choices of .                      "
},
{
  "id": "definition-quadratic-form-types",
  "level": "2",
  "url": "section-quadratic-surfaces.html#definition-quadratic-form-types",
  "type": "Definition",
  "number": "25",
  "title": "Definition.",
  "body": " Definition   A quadratic form is   positive definite if for all .  negative definite if for all .  positive semidefinite if for all .  negative semidefinite if for all .  indefinite if takes on positive and negative values for .    "
},
{
  "id": "theorem-classify-quadratic-forms",
  "level": "2",
  "url": "section-quadratic-surfaces.html#theorem-classify-quadratic-forms",
  "type": "Theorem",
  "number": "26",
  "title": "Theorem.",
  "body": " Theorem   If is a symmetric matrix with eigenvalues , then is   positive definite when all eigenvalues are positive  positive semidefinite when all eigenvalues are non-negative  negative definite when all eigenvalues are negative  negative semidefinite when all eigenvalues are non-positive  indefinite when at least one eigenvalue is negative and at least one eigenvalue is positive    "
},
{
  "id": "subsection-classifying-quadratic-forms-6",
  "level": "2",
  "url": "section-quadratic-surfaces.html#subsection-classifying-quadratic-forms-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " If is symmetric, we can write and set , so , and   The entries of are . Note that is always non-negative, so for , the sign of will only depend on the values of . This implies, for example that when for all , that is positive definite.  "
},
{
  "id": "figure-saddle",
  "level": "2",
  "url": "section-quadratic-surfaces.html#figure-saddle",
  "type": "Figure",
  "number": "27",
  "title": "",
  "body": " The indefinite quadratic surface generated by .   "
},
{
  "id": "activities-3",
  "level": "1",
  "url": "activities-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "0 About This Document",
  "body": " 0 About This Document  This document was created using PreTeXt on GitHub Codespaces and GitHub Pages, and was last compiled by Greg Mayer on .      These Studio Worksheets are meant to be used by the Distance Math Program offer of Linear Algebra MATH 1554.    The pacing of the topics roughly follow the schedule of the Distance Math offer of this course.    References to the Interactive Linear Algebra (ILA) textbook and the course Lecture Notes (LN) are found in the worksheet titles.    There are no solutions for these worksheets, but the instructional team will be going through these worksheets throughout the semester. Students are encouraged to work through these worksheets themselves, and are welcome to ask questions about any of the questions during office hours or in the course forums.      This work is under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.    This work was created and reviewed by Mihir Malladi, Navina Weliwita, and Greg Mayer. Last updated .  - Attends Denmark High School, Alpharetta, GA at the time of making  - Attends Denmark High School, Alpharetta, GA at the time of making  "
},
{
  "id": "activities-4",
  "level": "1",
  "url": "activities-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "1 Systems of Linear Equations (ILA 1.1, 1.2)",
  "body": " 1 Systems of Linear Equations (ILA 1.1, 1.2)     This worksheet is a bit shorter than most other worksheets to give time to discuss course and studio organization. We will discuss:   A) What are studios? How are they different from lectures?   B) How do TAs support your class?   C) Studio recordings and worksheet solutions.   D) How students can ask questions during studio.   E) Office hours (please attend them!).   F) General advice on how to succeed in linear algebra (and college!).      A is a set of linear equations. An example of a linear system with two equations is    We might want to know:   what values of the unknowns satisfy all equations in the system, if any?  what procedure do we want to use to identify those values?        Use the Teams chat to answer the following in one or two sentences. It is best if we go through these questions one at a time.     What does it mean for a linear system to be consistent?       How can we determine whether a linear system is consistent?       What are the three row operations that we can use to reduce a matrix?       What does it mean for a system to have a unique solution?       What does it mean for two matrices to be row equivalent?          Indicate whether the statements are true or false.     If a linear system has more equations than unknowns, then the system cannot have a unique solution.      If a linear system has more unknowns than equations, then the system could have an infinite number of solutions, or the system could have no solutions.     Before moving on - what strategies does your TA(s) recommend that students can use to approach true\/false questions?      For what values of A and B, if any, does the system have (a) an infinite number of solutions? (b) no solutions? (c) exactly one solution?      For the case where there are an infinite number of solutions, sketch the set of solutions. Note that sketches need to have labeled axes. The set of solutions should be a line that does not have arrows.       Consider the line .     Sketch any two points on the line. In this class we will always put x1 on the horizontal axis.      Sketch the line.      Construct a linear system of equations so that the line is the solution set. Use at least two equations. How many equations could you have in your system?      If the point is any point in the solution set, is the point also in the solution set for any real number k?      "
},
{
  "id": "activities-4-5-2",
  "level": "2",
  "url": "activities-4.html#activities-4-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Use the Teams chat to answer the following in one or two sentences. It is best if we go through these questions one at a time.     What does it mean for a linear system to be consistent?       How can we determine whether a linear system is consistent?       What are the three row operations that we can use to reduce a matrix?       What does it mean for a system to have a unique solution?       What does it mean for two matrices to be row equivalent?     "
},
{
  "id": "activities-4-6-1",
  "level": "2",
  "url": "activities-4.html#activities-4-6-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Indicate whether the statements are true or false.     If a linear system has more equations than unknowns, then the system cannot have a unique solution.      If a linear system has more unknowns than equations, then the system could have an infinite number of solutions, or the system could have no solutions.    "
},
{
  "id": "activities-4-7-1",
  "level": "2",
  "url": "activities-4.html#activities-4-7-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  For what values of A and B, if any, does the system have (a) an infinite number of solutions? (b) no solutions? (c) exactly one solution?     "
},
{
  "id": "activities-4-8-1",
  "level": "2",
  "url": "activities-4.html#activities-4-8-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Consider the line .     Sketch any two points on the line. In this class we will always put x1 on the horizontal axis.      Sketch the line.      Construct a linear system of equations so that the line is the solution set. Use at least two equations. How many equations could you have in your system?      If the point is any point in the solution set, is the point also in the solution set for any real number k?    "
},
{
  "id": "activities-5",
  "level": "1",
  "url": "activities-5.html",
  "type": "Worksheet",
  "number": "",
  "title": "2 Row Reduction and Echelon Forms (ILA1.2)",
  "body": " 2 Row Reduction and Echelon Forms (ILA1.2)         Use the Team chat to answer the following in one or two sentences.    What is the echelon form of a matrix?     What is the row reduced echelon form (RREF) of a matrix?          1. In the table below indicate which matrices are in echelon form, and indicate whether the matrices are in RREF.                       Suppose matrix A is .    Using the Teams chat, give an example of a matrix in RREF. Use * for entries that can be arbitrary.    How many different matrices can you make that are and in RREF?       1. Use the teams chat to answer the following in one or two sentences.      (a) What is a free variable?       (b) What is a pivot?       (c) How can we use row reduction to determine whether an augmented matrix corresponds to a consistent system?       1. Indicate whether the statements are true or false.      a) A linear system whose coefficient matrix has three pivotal columns. must be consistent.       b) The echelon form of a coefficient matrix is unique.       c) If a consistent linear system can be represented as an augmented matrix , then the solution is a vector in .     2. For any three distinct points in the plane, no two on a vertical line, there is a second degree polynomial that passes through those three points. Construct the polynomial that passes through , , and . That is, solve      "
},
{
  "id": "activities-5-3-4",
  "level": "2",
  "url": "activities-5.html#activities-5-3-4",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Use the Team chat to answer the following in one or two sentences.    What is the echelon form of a matrix?     What is the row reduced echelon form (RREF) of a matrix?   "
},
{
  "id": "activities-5-4-3",
  "level": "2",
  "url": "activities-5.html#activities-5-4-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  1. In the table below indicate which matrices are in echelon form, and indicate whether the matrices are in RREF.                  "
},
{
  "id": "activities-5-5-1",
  "level": "2",
  "url": "activities-5.html#activities-5-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Suppose matrix A is .    Using the Teams chat, give an example of a matrix in RREF. Use * for entries that can be arbitrary.    How many different matrices can you make that are and in RREF?   "
},
{
  "id": "activities-6",
  "level": "1",
  "url": "activities-6.html",
  "type": "Worksheet",
  "number": "",
  "title": "3 Vector Equations and The Matrix Equation (ILA 1.3, 2.1, 2.2, 2.3)",
  "body": " 3 Vector Equations and The Matrix Equation (ILA 1.3, 2.1, 2.2, 2.3)    Welcome to Week 2! This week there are several assessments that are due.  According to the syllabus, what assessments are due this week? When are they due?   If you need help while you are completing a homework set or written assignment, what can you do to ask a question?   Where can you find all of the office hours that are available for this class?      Use the Teams chat to answer the following in one or two sentences.  1. What is a linear combination of vectors?   2. What does the span of a set of vectors represent?   3. What does it mean for a vector to be in the span of a set of vectors?   4. How do we determine whether a vector is in the span of a set of vectors?        Suppose  .     Sketch the span of the columns of the matrix.       On the same graph, sketch vectors and .      Using your graph, which of the following systems is consistent?             Suppose are non-zero vectors in , and that span a plane.   Then Span is equal to which of the expressions below?  i) Span  ii) Span  iii) Span       For what values of will the span of the vectors be a plane?         Indicate whether the statements are true or false.    If the equation is inconsistent, then is not in the set spanned by the columns of .    If the augmented matrix has a pivot position in every row, then the equation must be consistent.    There are exactly three vectors in Span .     "
},
{
  "id": "activities-6-5-2",
  "level": "2",
  "url": "activities-6.html#activities-6-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose  .     Sketch the span of the columns of the matrix.       On the same graph, sketch vectors and .      Using your graph, which of the following systems is consistent?        "
},
{
  "id": "activities-6-6-1",
  "level": "2",
  "url": "activities-6.html#activities-6-6-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose are non-zero vectors in , and that span a plane.   Then Span is equal to which of the expressions below?  i) Span  ii) Span  iii) Span  "
},
{
  "id": "activities-6-7-1",
  "level": "2",
  "url": "activities-6.html#activities-6-7-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  For what values of will the span of the vectors be a plane?    "
},
{
  "id": "activities-6-8-1",
  "level": "2",
  "url": "activities-6.html#activities-6-8-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Indicate whether the statements are true or false.    If the equation is inconsistent, then is not in the set spanned by the columns of .    If the augmented matrix has a pivot position in every row, then the equation must be consistent.    There are exactly three vectors in Span .   "
},
{
  "id": "worksheet-4",
  "level": "1",
  "url": "worksheet-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "4 Solution Sets and Linear Independence",
  "body": " 4 Solution Sets and Linear Independence     Use the Teams chat to answer the following in one or two sentences.    When a Homogeneous system has a nontrivial solution, what properties does that system have?      What is a trivial solution to the system ?      Suppose is consistent and is a solution. Then the solution set of is the set of all vectors of the form . What is ?        1. Express the solution to in parametric vector form.   (a)       (b)        2. Example construction exercises.   (a) Give an example of a non zero 2 3 matrix such that is a solution of .   (b) Give an example of a non trivial solution to , where     3. Indicate whether the statements are true or false.   (a) If is a non-trivial solution of , then all of the entries of are non-zero.   (b) if and , then .   (c) Any  with two pivotal positions has a non trivial solution to       1. What is a set of linearly independent vectors?   2. When two vectors are linearly dependent, how are they related?   3. How are span and linear dependence related to each other?      1. In the problems, below , , are three linearly independent vectors in . Which of the collections of vectors below are linearly independent?               2. For what values of are the columns of linearly dependent?      3. A matrix has all non-zero columns, and . Identify a non-trivial solution to .    4. Short answer questions.   (a) The columns of a matrix are linearly independent. How many pivots does the matrix have?   (b) If the columns of a matrix span , how many pivots does the matrix have?   "
},
{
  "id": "worksheet-4-2-4",
  "level": "2",
  "url": "worksheet-4.html#worksheet-4-2-4",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  When a Homogeneous system has a nontrivial solution, what properties does that system have?   "
},
{
  "id": "worksheet-4-2-5",
  "level": "2",
  "url": "worksheet-4.html#worksheet-4-2-5",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What is a trivial solution to the system ?   "
},
{
  "id": "worksheet-4-2-6",
  "level": "2",
  "url": "worksheet-4.html#worksheet-4-2-6",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Suppose is consistent and is a solution. Then the solution set of is the set of all vectors of the form . What is ?   "
},
{
  "id": "activities-8",
  "level": "1",
  "url": "activities-8.html",
  "type": "Worksheet",
  "number": "",
  "title": "5 Linear Transforms (ILA 3.1, 3.2, 3.3)",
  "body": " 5 Linear Transforms (ILA 3.1, 3.2, 3.3)     Use the Teams chat to answer the following in one or two sentences.  1. What is a linear transform?   2. Suppose for all where is a matrix and is onto.   What can we say about the solutions to ?  What can we say about the pivots of ?    3. Suppose for all where is a matrix and is one-to-one.   What can we say about the solutions to ?  What can we say about the pivots of ?         Let be a matrix. What must and be if we define the linear transformation by ?        Let be a linear transformation such that    Construct a matrix so that for all vectors .       Let be a linear transformation such that  .   Identify a non-trivial solution to .       Let be the linear transformation with the matrix below. Match each choice of on the the left with the geometric description of the action of on the right.         Indicate whether the statements are true or false.    If is a matrix then the map cannot be one-to-one.    If is a matrix then the map cannot be onto.    The linear transform is one-to-one if and only if the only solution to is the trivial solution.        Construct the standard matrix of the linear transformation .    , where and     is a vertical shear given by and .    A matrix such that . is a linear transformation that first reflects vectors across the line , then rotates them counterclockwise by radians about the origin, then reflects them across the line .     "
},
{
  "id": "activities-8-4-2",
  "level": "2",
  "url": "activities-8.html#activities-8-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be a matrix. What must and be if we define the linear transformation by ?   "
},
{
  "id": "activities-8-5-1",
  "level": "2",
  "url": "activities-8.html#activities-8-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be a linear transformation such that    Construct a matrix so that for all vectors .  "
},
{
  "id": "activities-8-6-1",
  "level": "2",
  "url": "activities-8.html#activities-8-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let be a linear transformation such that  .   Identify a non-trivial solution to .  "
},
{
  "id": "activities-8-7-1",
  "level": "2",
  "url": "activities-8.html#activities-8-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let be the linear transformation with the matrix below. Match each choice of on the the left with the geometric description of the action of on the right.    "
},
{
  "id": "activities-8-8-1",
  "level": "2",
  "url": "activities-8.html#activities-8-8-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Indicate whether the statements are true or false.    If is a matrix then the map cannot be one-to-one.    If is a matrix then the map cannot be onto.    The linear transform is one-to-one if and only if the only solution to is the trivial solution.   "
},
{
  "id": "activities-8-9-1",
  "level": "2",
  "url": "activities-8.html#activities-8-9-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Construct the standard matrix of the linear transformation .    , where and     is a vertical shear given by and .    A matrix such that . is a linear transformation that first reflects vectors across the line , then rotates them counterclockwise by radians about the origin, then reflects them across the line .   "
},
{
  "id": "activities-9",
  "level": "1",
  "url": "activities-9.html",
  "type": "Worksheet",
  "number": "",
  "title": "6 Matrix Algebra (ILA 3.4)",
  "body": " 6 Matrix Algebra (ILA 3.4)      Consider the following matrix equation:   Assume are all . When does this equation hold? Always, sometimes, never?        Suppose and are matrices.   the entry of in row and column is  the entry of in row and column is   Then:   The entries of are .  If , then the entries of are .    Suppose   What are the values of and ?      be matrices of dimensions needed for matrix multiplication to be defined, and is .           in general  does not mean  does not mean that either or .    If   of (if any) satisfy ?        is the matrix whose columns are the rows of A    : if , then        , matrix multiplied by itself times  : if , then what is equal to as ?       True or false: if and are matrices, then .   If an example exists, give a example where this is true.  If an example exists, give a example where this is false.       Apply matrix algebra to expand the matrix product and use the given assumption to simplify. Assume the matrices are .       Indicate whether the following statement is true or false.   For any square matrix , the matrix satisfies .     "
},
{
  "id": "activities-9-7-2",
  "level": "2",
  "url": "activities-9.html#activities-9-7-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " True or false: if and are matrices, then .   If an example exists, give a example where this is true.  If an example exists, give a example where this is false.   "
},
{
  "id": "activities-9-8-1",
  "level": "2",
  "url": "activities-9.html#activities-9-8-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Apply matrix algebra to expand the matrix product and use the given assumption to simplify. Assume the matrices are .   "
},
{
  "id": "activities-9-9-1",
  "level": "2",
  "url": "activities-9.html#activities-9-9-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Indicate whether the following statement is true or false.   For any square matrix , the matrix satisfies .   "
},
{
  "id": "activities-10",
  "level": "1",
  "url": "activities-10.html",
  "type": "Worksheet",
  "number": "",
  "title": "7 Invertible Matrices (ILA 3.5, 3.6)",
  "body": " 7 Invertible Matrices (ILA 3.5, 3.6)      True or False: if is an invertible matrix, then is consistent for all b in .    :  The matrix is if there is an matrix so that  .  If there is, we write .   Note that   A matrix that is not invertible is .  There is a formula for computing the inverse of a matrix.     :  The matrix is non-singular if and only if , and    :  Let .   For what values of is singular?  Use the inverse to solve the system of equations       :  Determine whether the following statements are true or false.  1. If is square and invertible then every row of contains a pivot.   2. If is square and invertible then the columns of are independent.   3. If is square and invertible then is one-to-one and onto.     :  :  If be an matrix then these statements are equivalent.   is invertible.  is row equivalent to .  has pivotal columns (all columns are pivotal).  has only the trivial solution.  The columns of are linearly independent.  The equation has a solution for all .  The columns of span .  There is a matrix so that  There is a matrix so that  is invertible.    By equivalent statements we mean that:    if one statement is true, all statements are true    if one statement is false, all statements are false      :  :  Represent row operations using matrix multiplication because it allows us to under- stand how algorithms that reduce matrices work.   Recall that we have elementary row operations:    swap rows    multiply a row by a non-zero scalar    add a multiple of one row to another    We can represent each operation by a matrix multiplication with an .  :  An elementary matrix, , is a square matrix that differs by by one row operation.  :  Consider the sequence of row operations that reduce matrix to the identity:     Construct the elementary matrices , , and that apply the row operations above.    Use the elementary matrices to construct .     "
},
{
  "id": "activities-11",
  "level": "1",
  "url": "activities-11.html",
  "type": "Worksheet",
  "number": "",
  "title": "8 Exam 1 Review",
  "body": " 8 Exam 1 Review     Suppose is a linearly dependent set of vectors in . Indicate whether the following statements are true or false.    is a linearly dependent set.     is a linearly dependent set.         How many different matrices can you make that meet all of the given criteria?    Matrix is non-zero, , in RREF, has only 1 pivot column, and every entry of is either 1 or 0.     Matrix is , in RREF, and is a solution to .         The linear transform , where , is onto.    The domain of is .    The co-domain of is .    The range of is .    has exactly pivots.        Suppose and .  In the grids below, sketch:   the span of the columns of  any non-zero vector that is a solution to  the solution set to   You do not need to show your work.   (a)           (b)           (c)                If is and is a linear transform that:   first rotates points in clockwise about the origin by radians,  then reflects them through the line ,  then projects them onto the line   What is equal to?    "
},
{
  "id": "activities-11-2-2",
  "level": "2",
  "url": "activities-11.html#activities-11-2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Suppose is a linearly dependent set of vectors in . Indicate whether the following statements are true or false.    is a linearly dependent set.     is a linearly dependent set.     "
},
{
  "id": "activities-11-3-1",
  "level": "2",
  "url": "activities-11.html#activities-11-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " How many different matrices can you make that meet all of the given criteria?    Matrix is non-zero, , in RREF, has only 1 pivot column, and every entry of is either 1 or 0.     Matrix is , in RREF, and is a solution to .     "
},
{
  "id": "activities-11-4-1",
  "level": "2",
  "url": "activities-11.html#activities-11-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " The linear transform , where , is onto.    The domain of is .    The co-domain of is .    The range of is .    has exactly pivots.    "
},
{
  "id": "activities-11-5-1",
  "level": "2",
  "url": "activities-11.html#activities-11-5-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " Suppose and .  In the grids below, sketch:   the span of the columns of  any non-zero vector that is a solution to  the solution set to   You do not need to show your work.   (a)           (b)           (c)            "
},
{
  "id": "activities-11-6-1",
  "level": "2",
  "url": "activities-11.html#activities-11-6-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " If is and is a linear transform that:   first rotates points in clockwise about the origin by radians,  then reflects them through the line ,  then projects them onto the line   What is equal to?  "
},
{
  "id": "activities-12",
  "level": "1",
  "url": "activities-12.html",
  "type": "Worksheet",
  "number": "",
  "title": "9 Applications (LN 1.1, 1.2, 1.3)",
  "body": " 9 Applications (LN 1.1, 1.2, 1.3)    :  True or false: if a matrix is upper triangular then the matrix is in echelon form.    1. Recall the The LU Factorization of a matrix.  :  If is an matrix that can be row reduced to echelon form without row exchanges, then . is a lower triangular matrix with 's on the diagonal, is an form of .   To compute the LU:   Reduce to , if possible.  Place entries in so that the same sequence of row operations reduces L to I.   Construct the factorization of and use it to solve .      1. Below is a model for the interdependence of a 3-sector economy.       X  Y  Z  0.2  0.2  0.2  0.1  0.1  0.1       For each unit of output,    X requires .2 units from X, .1 units from Y, and .1 units from Z    Y requires 0 units from X, .2 units from Y, and .1 units from Z    Z requires 0 units from X, 0 units from Y, and .2 units from Z    Construct the consumption matrix for this economy. What production level is required to satisfy a final demand of 80 units of X, 150 units of Y, and 30 units of Z?     1. and are invertible matrices, is the identity matrix, and is the zero matrix. Construct an expression for in terms of and .    "
},
{
  "id": "activities-13",
  "level": "1",
  "url": "activities-13.html",
  "type": "Worksheet",
  "number": "",
  "title": "10 Computer Graphics, Subspaces (LN 1.4, 1.5; ILA 2.6, 2.7)",
  "body": " 10 Computer Graphics, Subspaces (LN 1.4, 1.5; ILA 2.6, 2.7)      Matrix is .    Two players:    0P students can only place 0's in the matrix.    1P (TA or instructor) can only place 1's in the matrix      Players take turns placing entries into the matrix.    After all entries are filled,    0P wins if the matrix is singular.    1P wins if the atrix is invertible.      The entries of are as follows.   You are the 0P and go first. Where to you want to place your 0?      1. Triangle is determined by the data points, . Transform Reflects points through the line .    Represent the data with a matrix, . Use homogeneous coordinates.    Use matrix multiplication to determine the image of under .    Sketch and its image under .        1. Suppose is the set    List three vectors that are in the set .   Give an example of a vector that is in but is not in .     2. Some sets are also subspaces.   :      A subset of of is a if it is closed under scalar multiplies and vector addition. That is: for any and for ,             Note that condition (a) implies that zero vector must be in     List three vectors that are in each set and determine whether the set is a subpace.              3.        Suppose is an matrix    The , Col , is the span of the columns of .    The , Null , is set of all vectors that solve .         Give an example of a matrix that is in RREF, has two pivotal columns, and v is in the null space of A.    "
},
{
  "id": "activities-14",
  "level": "1",
  "url": "activities-14.html",
  "type": "Worksheet",
  "number": "",
  "title": "11 Subspaces, Dimension, Basis (ILA 2.8, 2.9)",
  "body": " 11 Subspaces, Dimension, Basis (ILA 2.8, 2.9)    :  True or false: True or false: the set is a subspace.      1. Suppose a set of vectors are in a subspace, , of .  What properties does the set of vectors need to have in order for them to form a basis for a subspace?   True or false: suppose form a basis for a subspace, , of . Then the set also forms a basis for .     2. Recall the definitions of the Column Space and Null Space of a matrix.  :  Suppose is an matrix.    The of , Col , is the span of the column of .    The of , Null , is set of all vectors that solve .     has the RREF below. Construct a basis for Col and a basis for Null .  .    3. Answer the following using the chat.  What is the of a subspace?   What is the of a matrix?   How is the rank of a matrix related to dim(Null )?   "
},
{
  "id": "activities-15",
  "level": "1",
  "url": "activities-15.html",
  "type": "Worksheet",
  "number": "",
  "title": "12 Determinants (ILA 4.1, 4.2, 4.3)",
  "body": " 12 Determinants (ILA 4.1, 4.2, 4.3)    True or false: if is and , then .       Use a determinant to identify all values of so that C is singular.         Suppose are vectors in . And   be a matrix whose determinant is equal to 2. Determine the value of the determinant         If and are real numbers, and   If , then         Suppose . Then         The determinant of is:       "
},
{
  "id": "activities-15-3-2",
  "level": "2",
  "url": "activities-15.html#activities-15-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Use a determinant to identify all values of so that C is singular.    "
},
{
  "id": "activities-15-4-1",
  "level": "2",
  "url": "activities-15.html#activities-15-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose are vectors in . And   be a matrix whose determinant is equal to 2. Determine the value of the determinant    "
},
{
  "id": "activities-15-5-1",
  "level": "2",
  "url": "activities-15.html#activities-15-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  If and are real numbers, and   If , then    "
},
{
  "id": "activities-15-6-1",
  "level": "2",
  "url": "activities-15.html#activities-15-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Suppose . Then    "
},
{
  "id": "activities-15-6-26",
  "level": "2",
  "url": "activities-15.html#activities-15-6-26",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  The determinant of is:   "
},
{
  "id": "activities-16",
  "level": "1",
  "url": "activities-16.html",
  "type": "Worksheet",
  "number": "",
  "title": "13 Determinants (ILA 4.1, 4.2, 4.3)",
  "body": " 13 Determinants (ILA 4.1, 4.2, 4.3)    Exam 2 is next week. What topics would you like to go over in our next studio?   :  True or false: If is n elementary matrix, then det( ) .     :  1. Recall the following theorem from lectures:  :  If , and is some parallelogram in , then   where .   is the parallelogram determined by , and .   What is the area of ?  If , what is the area of the image of under the map ?  In one diagram, sketch and its image under the transform.     2. From the previous question: if , and is some parallelogram in , that   This means that |det | tells us about how areas change under a linear transform.  (a) What does |det | tell us about areas change under the transform ?   (b) What does the sign of det tell us about areas change under the transform ? Hint: think about the standard matrices for reflections.     3. Calculate without constructing .  (a) A is a matrix and is a linear transformation that first rotates vectors in counterclockwise by radians about the origin, then reflects them across the -axis.   (b) , where is , and is a transformation that first rotates vectors in counterclockwise by radians about the origin, and then projects them onto the line   (c) , where A is , is a transformation that rotates vectors in about the origin 100 times by radians, and then reflects them 100 times through the line .     4. Determine the volume of the parallelepiped with one vertex at the origin and adjacent vertices at , , .   "
},
{
  "id": "activities-17",
  "level": "1",
  "url": "activities-17.html",
  "type": "Worksheet",
  "number": "",
  "title": "14 Exam 2 Review",
  "body": " 14 Exam 2 Review     True or false: the columns of an matrix are a basis for .     Which of the following, if any, are subspaces of ? For those that are subspaces, what is the dimension?                The nullspace of          Indicate whether the statements are true or false. is an matrix.    If for some , then cannot be invertible.     If for some , the equation has more than one solution, then is not invertible.      Every elementary matrix is invertible.          A trivial subspace is similar to the concept of a trivial solution to a homogeneous system.  Definition:   A trivial subspace is a subspace that contains only the zero vector. If a subspace contains more than just the zero vector, then it is a non-trivial subspace.   Indicate whether the following statements are true or false.    A matrix with two pivot columns can have a non-trivial null space.     If the columns of a matrix are a basis for , then the null space of is trivial.     If is an matrix such that the equation has a unique solution for every , then the null space of is trivial.         Let be an matrix with entries defined by:   Suppose .    What is the rank of equal to?    Give a basis for Col      "
},
{
  "id": "activities-17-2-6",
  "level": "2",
  "url": "activities-17.html#activities-17-2-6",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Which of the following, if any, are subspaces of ? For those that are subspaces, what is the dimension?                The nullspace of      "
},
{
  "id": "activities-17-3-1",
  "level": "2",
  "url": "activities-17.html#activities-17-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Indicate whether the statements are true or false. is an matrix.    If for some , then cannot be invertible.     If for some , the equation has more than one solution, then is not invertible.      Every elementary matrix is invertible.      "
},
{
  "id": "activities-17-4-1",
  "level": "2",
  "url": "activities-17.html#activities-17-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " A trivial subspace is similar to the concept of a trivial solution to a homogeneous system.  Definition:   A trivial subspace is a subspace that contains only the zero vector. If a subspace contains more than just the zero vector, then it is a non-trivial subspace.   Indicate whether the following statements are true or false.    A matrix with two pivot columns can have a non-trivial null space.     If the columns of a matrix are a basis for , then the null space of is trivial.     If is an matrix such that the equation has a unique solution for every , then the null space of is trivial.     "
},
{
  "id": "activities-17-5-1",
  "level": "2",
  "url": "activities-17.html#activities-17-5-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " Let be an matrix with entries defined by:   Suppose .    What is the rank of equal to?    Give a basis for Col    "
},
{
  "id": "activities-18",
  "level": "1",
  "url": "activities-18.html",
  "type": "Worksheet",
  "number": "",
  "title": "15 Markov Chains and Eigenvalues (ILA 5.1, 5.2, 5.6)",
  "body": " 15 Markov Chains and Eigenvalues (ILA 5.1, 5.2, 5.6)    :  If and , what is equal to?     1. Recall the definition of a regular stochastic matrix.   :  A stochastic matrix is if there is some such that every entry of is   Determine whether and are a regular stochastic matrices.     2. We use the idea of a regular stochastic matrix to describe convergence of Markov chains.  :  If is a regular stochastic matrix, then converges to a steady-state vector as .   Suppose there are two cities, X and Y. Every year,    70% of the people from X stay in X, the remaining 30% move to Y.    40% of the people from Y stay in Y, the remaining 60% move to X.    The initial populations of X and Y are and , respectively.    What is the stochastic matrix that represents this situation?    After a long period of time, what is the population in city X?       1. The Markov Chains we were exploring have a connection to the eigenvalue problem.   :  If is real , and there is a in , and   then is an for , and is the corresponding .   (a) Is an eigenvalue of ? Do not compute the characteristic polynomial.    (b) Determine whether and are eigenvectors of . If so, what are their eigenvalues? Do not use the characteristic polynomial.      2. is a linear transformation in . Without constructing , identify one eigenvalue of .     reflects points across the line .     projects points onto the axis.      3. If with and is invertible, can you identify an eigenvalue of ?   "
},
{
  "id": "worksheet-8-worksheet",
  "level": "1",
  "url": "worksheet-8-worksheet.html",
  "type": "Worksheet",
  "number": "",
  "title": "16 Diagonalization, Complex Eigenvalues, Page Rank (ILA 5.3, 5.4, 5.5, 5.6)",
  "body": " 16 Diagonalization, Complex Eigenvalues, Page Rank (ILA 5.3, 5.4, 5.5, 5.6)    True or false: if is diagonalizable, then is invertible.   1. Recall from lecture: matrix is diagonalizable if it can be written .   is a matrix whose columns are  is a  The elements on the main diagonal of are  A diagonal matrix is a matrix that  The geometric multiplicity of an eigenvalue is:  A matrix can be diagonalized when:     2. Construct and so that if possible. Eigenvalues of are given.                 A singular matrix in echelon form that can be diagonalized.  A singular matrix in echelon form that cannot be diagonalized.  An invertible matrix in echelon form that can be diagonalized.  An invertible matrix in echelon form that cannot be diagonalized.       1. is a composition of a rotation and a scaling. Give the angle of rotation , and the scale factor .       1. A set of web pages link to each other according to this diagram:       V  W  Y  X  Z               Create the transition matrix for this web.  Construct the Google matrix for this web. Use damping factor .  Compute the steady-state vector and page ranks of each page on the web. You may use software.    For a web with only two pages that are linked to each other, we can compute the steady state using MATLAB or Octave with these commands:   Pstar=  K = 1\/2*ones(2)  p = 0.85  G = p * Pstar + (1 - p) * K  G ^ 100   There are many free online Octave compilers available.   "
},
{
  "id": "worksheet-8-worksheet-5-2",
  "level": "2",
  "url": "worksheet-8-worksheet.html#worksheet-8-worksheet-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " 1. is a composition of a rotation and a scaling. Give the angle of rotation , and the scale factor .   "
},
{
  "id": "activities-20",
  "level": "1",
  "url": "activities-20.html",
  "type": "Worksheet",
  "number": "",
  "title": "17 Inner Products (ILA 6.1, 6.2)",
  "body": " 17 Inner Products (ILA 6.1, 6.2)    :  True or false: If Null , then is orthogonal to the rows of matrix .     :  Let be a subspace of . Vector is to if is orthogonal to every vector in .   The set of all vectors orthogonal to is a subspace, the of , or .    :  1. is the set of all vectors of the form .   (a) We can use set-builder notation to write .   (b) Which of the vectors are in ?    (c) We can use set-builder notation to write .     2. Fill in the blanks.  (a) If is the plane spanned by the vectors and , a basis of is given by .   (b) If , then dim = , and dim .       The space spanned by the rows of matrix is .   We can show that   a basis for Row is given by the pivot rows of  in general Row and Col are not related to each other except that     dim dim because    Row Col by the properties of the       For any matrix ,    the orthogonal complement of Row is Null     the orthogonal complement of Col is Null      We can describe the relationship between these four spaces with the diagram:   https:\/\/ibb.co\/TBFtZZf2      :  Suppose that .  1. Construct bases for the following.  (a) Row   (b)   (c) Col   (d)   2. On the grids below sketch a) Null and Row , and b) Col , and .   (a)           (b)             "
},
{
  "id": "activities-21",
  "level": "1",
  "url": "activities-21.html",
  "type": "Worksheet",
  "number": "",
  "title": "18 Orthogonal Sets (ILA 6.1, 6.2)",
  "body": " 18 Orthogonal Sets (ILA 6.1, 6.2)       Suppose and are in , with , and . The is the vector in the span of that is closest to .      Moreover, , where     The vector is orthogonal to , so that    Schematic:      1. Write as the sum of a vector parallel to and a vector perpendicular to .     2. Give examples of the following.    A matrix, , in RREF, such that and .      Two linearly independent vectors in , and , such that , where       A matrix in RREF, , such that is spanned by .           An matrix has orthonormal columns if and only if .       An is a square invertible matrix so that .    Note:    In other words, an is a square matrix with .    There is no name for matrices that have columns that are orthogonal but orthonormal    If is , can have orthonormal columns when ?               if and only if    These properties tell us that the mapping preserves lngth and orthogonality.     Indicate whether the statements are true or false.   If the columns of an matrix are orthonormal, then the linear mapping preserves lengths.      If is a stochastic matrix, then the columns of have unit length.      All orthogonal matrices are invertible.      "
},
{
  "id": "activities-21-5-3",
  "level": "2",
  "url": "activities-21.html#activities-21-5-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " If the columns of an matrix are orthonormal, then the linear mapping preserves lengths.  "
},
{
  "id": "activities-21-5-28",
  "level": "2",
  "url": "activities-21.html#activities-21-5-28",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " If is a stochastic matrix, then the columns of have unit length.  "
},
{
  "id": "activities-21-5-53",
  "level": "2",
  "url": "activities-21.html#activities-21-5-53",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " All orthogonal matrices are invertible.  "
},
{
  "id": "activities-22",
  "level": "1",
  "url": "activities-22.html",
  "type": "Worksheet",
  "number": "",
  "title": "19 Exam 3 Review",
  "body": " 19 Exam 3 Review    :  True or false: if is diagonalizable, then so is .    1. Indicate whether the statements are true or false.  (a) if is diagonalizable, then so is .   (a) if is not invertible then is not diagonalizable.     2. For what values of (if any) does have one real eigenvalue of algebraic multiplicity 2?     3. Give an example of an upper triangular matrix such that is its only eigenvalue and such that its eigenspace is -dimensional.    4. Consider the dynamical system , where   The eigenvalues of are and . Analyze the long-term behaviour of the system. In other words, determine what tends to as .    5. Suppose and are real numbers on the open interval , and     Is stochastic? Is regular?    By inspection, what is one eigenvalue of ?    Compute the steady-state vector of .    Compute the limit       6. tr is the sum of the elements on the main diagonal of . If tr , det , and , compute the eigenvalues of .   "
},
{
  "id": "activities-23",
  "level": "1",
  "url": "activities-23.html",
  "type": "Worksheet",
  "number": "",
  "title": "20 Orthogonal Projections, Gram-Schmidt, and the QR Factorization (6.3, 6.4)",
  "body": " 20 Orthogonal Projections, Gram-Schmidt, and the QR Factorization (6.3, 6.4)    True or false: If is a subspace of , and , then     Suppose:    and in are an orthonormal basis for subspace W    Span    vector is not in       Our goals:    identify the vector in that is closest to , which we call .    identify so that .       1.    Determine whether and :   are linearly independent    are mutually orthogonal    are orthonormal    span       Is in Span ?     Compute the vector, , that most closely approximates     Construct a vector, , that is in .       2. indicate whether the statements are true or false.    If is in subspace , the orthogonal projection of onto is .     If is orthogonal to and , then is also orthogonal to .       3. Give an example o a non-zero vector, , whose projection onto Col is .       Suppose the set is a basis for a subspace of .  ,  ,  ,  ,  ,  Then, is an orthogonal basis for .     1. Use the Gram-Schmidt Process to compute the QR decomposition of   "
},
{
  "id": "activities-24",
  "level": "1",
  "url": "activities-24.html",
  "type": "Worksheet",
  "number": "",
  "title": "21 Least-Squares and Linear Models (ILA 6.3, 6.4)",
  "body": " 21 Least-Squares and Linear Models (ILA 6.3, 6.4)    :  True or false: If is and has linearly independent columns, then has a factorization , and Col Col .    :    Fill in the blanks. These questions concern the least squares solution to .    If , then ____________.    If the columns of are linearly independent, then ____________ .    If is in the column space of , then ____________.    If and is invertible, then ____________ .        These questions concern the least squares solution to . Indicate whether the statements are true or false.    The solution is chosen so that is close as possible to .     If then .     If the columns of are linearly independent, then the least squares solution is unique.         Use the QR decomposition to calculate the least squares solution to .         Four points in with coordinates are given in the table below.                         Determine the coefficients and for the plane that best fits the data. .     "
},
{
  "id": "activities-24-4-2",
  "level": "2",
  "url": "activities-24.html#activities-24-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Fill in the blanks. These questions concern the least squares solution to .    If , then ____________.    If the columns of are linearly independent, then ____________ .    If is in the column space of , then ____________.    If and is invertible, then ____________ .   "
},
{
  "id": "activities-24-5-1",
  "level": "2",
  "url": "activities-24.html#activities-24-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  These questions concern the least squares solution to . Indicate whether the statements are true or false.    The solution is chosen so that is close as possible to .     If then .     If the columns of are linearly independent, then the least squares solution is unique.    "
},
{
  "id": "activities-24-6-1",
  "level": "2",
  "url": "activities-24.html#activities-24-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the QR decomposition to calculate the least squares solution to .    "
},
{
  "id": "activities-24-7-1",
  "level": "2",
  "url": "activities-24.html#activities-24-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Four points in with coordinates are given in the table below.                         Determine the coefficients and for the plane that best fits the data. .   "
},
{
  "id": "activities-25",
  "level": "1",
  "url": "activities-25.html",
  "type": "Worksheet",
  "number": "",
  "title": "22 Orthogonality Review",
  "body": " 22 Orthogonality Review    True or false: The Gram-Schmidt algorithm applied to three distinct vectors in produce an orthogonal basis     1. Four points in with coordinates are given in the table below.                  Determine the coeffcients and for the curve that best fits the data. Hint: the exercise has been set up so that the normal equations will only require a few row operations to solve.    2. The three vectors below are a basis for a subspace     The pair of vectors and are ortogonal. Which other pairs are orthogonal?    Use the vectors above, in that order, to construct an orthogonal basis for by using the Gram-Schmidt Process.      3. Let , where   Compute the triangular matrix .    4. is an orthogonal basis for subspace . Classify each set as a basis for , an orthogonal basis for , or not a basis for .              "
},
{
  "id": "activities-26",
  "level": "1",
  "url": "activities-26.html",
  "type": "Worksheet",
  "number": "",
  "title": "23 Diagonalization of Symmetric Matrices (LN 2.1)",
  "body": " 23 Diagonalization of Symmetric Matrices (LN 2.1)     :  Matrix is if it satisfies .   :  In this part of the course we often encounter the expressions   Which of the following are symmetric matrices?    1. , where is a real matrix.     2. , where is a vector in .     3. , where is a diagonal, and .      The Spectral Theorem:  An symmetric matrix has the following properties.    All eigenvalues of are real.    The eigenspaces are mutually orthogonal.     can be diagonalized as , where is diagonal and is orthogonal.     :    Give examples of the following.    A matrix that is diagonalizable but not orthogonally diagonalizable     A matrix that is orthogonally diagonalizable but not invertible.         Indicate whether the statements are true or false.    If is orthogonally diagonalizable, then so is .     If is orthogonally diagonalizable, then is symmetric.         The only eigenvalues of are and .   Construct matrices and for the orthogonal diagonalization .        :  Suppose can be orthogonally diagonalized as   Then has the decomposition    :  Construct a spectral decomposition for .   Leave your expression for as the sum of two matrices.   "
},
{
  "id": "activities-26-4-10",
  "level": "2",
  "url": "activities-26.html#activities-26-4-10",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Give examples of the following.    A matrix that is diagonalizable but not orthogonally diagonalizable     A matrix that is orthogonally diagonalizable but not invertible.    "
},
{
  "id": "activities-26-5-1",
  "level": "2",
  "url": "activities-26.html#activities-26-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Indicate whether the statements are true or false.    If is orthogonally diagonalizable, then so is .     If is orthogonally diagonalizable, then is symmetric.    "
},
{
  "id": "activities-26-6-1",
  "level": "2",
  "url": "activities-26.html#activities-26-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  The only eigenvalues of are and .   Construct matrices and for the orthogonal diagonalization .   "
},
{
  "id": "activities-27",
  "level": "1",
  "url": "activities-27.html",
  "type": "Worksheet",
  "number": "",
  "title": "24  Quadratic Forms (LN 2.2, 2.3)",
  "body": " 24 Quadratic Forms (LN 2.2, 2.3)    True or false: for all values of and .  Hint: plot it in Desmos 3D! And: how does this exercise relate to symmetric matrices?        A quadratic form is a function: , given by       Matrix is and symmetric, and is a variable vector in .    Example: express in the form .        If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.    Proof in the lecture videos\/textbook   Consider where .    Make a change of variable that transforms the quadratic form into another quadratic that has no cross-product terms.    For what values of will satisfy for any and ?    Tip: it may help to plot the surfaces in Desmos 3D to see what the surface looks like as you change value of     Our goal: .  Take for example the surface:   If we set to be constant, , we obtain the equation of a circle whose radius is .      The surface above has a unique minimum at the origin. What about other surfaces?     A quadratic form is   if for all .  if for all .  if for all .  if for all .  when at least one eigenvalue is negative and at least one is positive.        If is a symmetric matrix with eigenvalues , then is   when all eigenvalues are positive  when all eigenvalues are negative  when at least one eigenvalue is negative and at least one is positive        Assume . Construct the matrix of the quadratic form, and classify the quadratic form.    "
},
{
  "id": "activities-28",
  "level": "1",
  "url": "activities-28.html",
  "type": "Worksheet",
  "number": "",
  "title": "25 Constrained Optimization (LN 2.4)",
  "body": " 25 Constrained Optimization (LN 2.4)     Goal: locate the extreme values of   subject to   We'd also like to determine the values of at these points.  :  If , is a real symmetric matrix, with eigenvalues   and associated normalized eigenvectors   Then, subject to the constraint ,    the value of , attained at .    the value of , attained at .     :  Calculate the maximum and minimum values of the quadratic form subject to the constraint . Identify where this maximum is obtained.      :  Suppose , where is symmetric and has eigenvalues   and associated eigenvectors   Subject to the constraints and ,    the maximum value of , attained at     the minimum value of , attained at      :  Calculate the maximum and minimum values of subject to and .        Give examples of the following if possible.    A quadratic form , that has a maximum value 12, subject to the constraint that .     A quadratic form , that has a maximum value 4 at two distinct locations, subject to the constraint that .         Indicate whether the statements are true or false.    The largest value of a positive definite quadratic form is the largest eigenvalue of .     The largest value of a positive definite quadratic form subject to is the largest value on the diagonal of .      "
},
{
  "id": "activities-28-5-2",
  "level": "2",
  "url": "activities-28.html#activities-28-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Give examples of the following if possible.    A quadratic form , that has a maximum value 12, subject to the constraint that .     A quadratic form , that has a maximum value 4 at two distinct locations, subject to the constraint that .    "
},
{
  "id": "activities-28-6-1",
  "level": "2",
  "url": "activities-28.html#activities-28-6-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Indicate whether the statements are true or false.    The largest value of a positive definite quadratic form is the largest eigenvalue of .     The largest value of a positive definite quadratic form subject to is the largest value on the diagonal of .    "
},
{
  "id": "activities-29",
  "level": "1",
  "url": "activities-29.html",
  "type": "Worksheet",
  "number": "",
  "title": "26 The Singular Value Decomposition (LN 2.5, 2.6, 2.7)",
  "body": " 26 The Singular Value Decomposition (LN 2.5, 2.6, 2.7)    Consider the linear transformation whose standard matrix is   Then:   The transform is a composition of a rotation and a scaling.  Unit vectors in are mapped to an ellipse.      Assume that the input satisfies . Determine:   Determine the unit vector that maximizes , and what is equal to.  Determine the unit vector that minimizes , and what is equal to.      The eigenvectors of can be used to construct bases for the four fundamental subspaces of any matrix.      Suppose are the eigenvectors of . The corresponding eigenvalues are ordered from largest to smallest, and the first eigenvalues are non-zero.  How are the eigenvectors related to the fundamental subspaces? Let's see.   Recall that is a matrix.    Therefore, the eigenvectors corresponding to different eigenvalues are mutually .    The singular values of are the positive square roots of the eigenvalues of .     So if and , then  .  The set of vectors   is an orthogonal basis for .    The first eigenvectors form a basis for .        The vector is a vector in .      The vectors and for are orthogonal because:        If , then the set for is an orthogonal basis for .      The vectors orthogonal to the space spanned by for form an orthogonal basis for .         Suppose are the orthonormal eigenvectors for , and   Then we have the following orthogonal bases for any real matrix .    is an orthonormal basis for Row( ).    is an orthonormal basis for Null( ).    is an orthonormal basis for Col( ).    If we need a basis for Col( ), we can identify any independent non-zero vectors in Col( ) and then use Gram-Schmidt to orthogonalize.     The vectors for are the of . The vectors for are the of .          Suppose is an matrix with singular values and . Then has the decomposition where     is a orthogonal matrix, and is an orthogonal matrix.     Construct the SVD of      1. Suppose     Construct a unit vector for which has maximum length.    Compute the condition number of .      2. By inspection, construct an SVD of the diagonal matrix   The SVD of a matrix is not unique: how many different SVDs can you create from the matrix above?    3. Indicate whether the statements are true or false.    Every matrix has a singular value decomposition.      If is symmetric, then its factorization is also its SVD.      The maximum value of subject to is .       "
},
{
  "id": "activities-30",
  "level": "1",
  "url": "activities-30.html",
  "type": "Worksheet",
  "number": "",
  "title": "27 Final Exam Review 1",
  "body": " 27 Final Exam Review 1    Before starting the worksheet, using Teams chat,  A) What is a strategy that is helpful for studying for the final exam?   :    Indicate whether the statements are true or false.    The quadratic form is positive definite.     If is square, then is the product of the singular values of .         If is a unit eigenvector of corresponding to eigenvalue , what is the value of ?        Below is a SVD factorization for a matrix .     What is the rank of ?    What is the largest value of , subject to ? For which vector is it obtained?    List an orthonormal basis for: Row , Col , Null     Construct an expression for the spectral decomposition of .     "
},
{
  "id": "activities-30-3-16",
  "level": "2",
  "url": "activities-30.html#activities-30-3-16",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Indicate whether the statements are true or false.    The quadratic form is positive definite.     If is square, then is the product of the singular values of .    "
},
{
  "id": "activities-30-4-1",
  "level": "2",
  "url": "activities-30.html#activities-30-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  If is a unit eigenvector of corresponding to eigenvalue , what is the value of ?   "
},
{
  "id": "activities-30-5-1",
  "level": "2",
  "url": "activities-30.html#activities-30-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Below is a SVD factorization for a matrix .     What is the rank of ?    What is the largest value of , subject to ? For which vector is it obtained?    List an orthonormal basis for: Row , Col , Null     Construct an expression for the spectral decomposition of .   "
},
{
  "id": "activities-31",
  "level": "1",
  "url": "activities-31.html",
  "type": "Worksheet",
  "number": "",
  "title": "28 Final Exam Review 2",
  "body": " 28 Final Exam Review 2    We made it to the end of the semester! Hooray! This is the last studio session that we have this semester.  :    Indicate whether the statements are possible (P) or impossible (I). For the statements that are possible, give an example.                                                   a)  is a linear transformation , where , , and is one-to-one but not onto.                 b)  is a negative semi-definite quadratic form, and , where is an eigenvector of .                 c)  is a square matrix, is an eigenvalue of , and dim Row .                 d)  Matrix is , for some , and dim(Null ) .                 e)  The Gram-Schmidt algorithm applied to exactly vectors in produces an orthogonal basis with dimension .                 f)  Matrix is , has singular values and , and .                       Vectors are linearly independent and span subspace .    Fill in the circles next to sets of vectors that span . Leave the other circles empty.              Fill in the circles next to sets of vectors that form a basis for . Leave the other circles empty.                  An example of an matrix whose nullspace is equal to its column space is:        Fill in the blanks.    If and for all there is at most one such that , and , how many pivot columns does have?     Consider the row operations that reduce to .   By inspection, and .    For what values of (if any) is diagonalizable?    An eigenvector of is . What is the eigenvalue associated with eigenvector ?        If possible, give an example of the following, or write not possible.    A matrix in RREF such that . The vectors and are a basis for the range of . .    A non-zero matrix, , that is in RREF, and satisfies dim and dim . .     "
},
{
  "id": "activities-31-3-3",
  "level": "2",
  "url": "activities-31.html#activities-31-3-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Indicate whether the statements are possible (P) or impossible (I). For the statements that are possible, give an example.                                                   a)  is a linear transformation , where , , and is one-to-one but not onto.                 b)  is a negative semi-definite quadratic form, and , where is an eigenvector of .                 c)  is a square matrix, is an eigenvalue of , and dim Row .                 d)  Matrix is , for some , and dim(Null ) .                 e)  The Gram-Schmidt algorithm applied to exactly vectors in produces an orthogonal basis with dimension .                 f)  Matrix is , has singular values and , and .                  "
},
{
  "id": "activities-31-4-1",
  "level": "2",
  "url": "activities-31.html#activities-31-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Vectors are linearly independent and span subspace .    Fill in the circles next to sets of vectors that span . Leave the other circles empty.              Fill in the circles next to sets of vectors that form a basis for . Leave the other circles empty.             "
},
{
  "id": "activities-31-5-1",
  "level": "2",
  "url": "activities-31.html#activities-31-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  An example of an matrix whose nullspace is equal to its column space is:   "
},
{
  "id": "activities-31-6-1",
  "level": "2",
  "url": "activities-31.html#activities-31-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Fill in the blanks.    If and for all there is at most one such that , and , how many pivot columns does have?     Consider the row operations that reduce to .   By inspection, and .    For what values of (if any) is diagonalizable?    An eigenvector of is . What is the eigenvalue associated with eigenvector ?   "
},
{
  "id": "activities-31-7-1",
  "level": "2",
  "url": "activities-31.html#activities-31-7-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  If possible, give an example of the following, or write not possible.    A matrix in RREF such that . The vectors and are a basis for the range of . .    A non-zero matrix, , that is in RREF, and satisfies dim and dim . .   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
