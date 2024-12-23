const ultimateDataAnalyticsAndDataScienceQuestionBank = [
  {
    id: 1,
    question: "What is SQL, and why is it important for data analysis?",
    answer:
      "SQL (Structured Query Language) is used to interact with databases for tasks like retrieving, inserting, updating, and deleting data. It's essential for data analysis because it allows querying structured data efficiently.",
  },
  {
    id: 2,
    question: "Explain the difference between DDL, DML, DCL, and TCL.",
    answer: {
      DDL: "Data Definition Language: Defines database schema (CREATE, ALTER, DROP)",
      DML: "Data Manipulation Language: Manipulates data (INSERT, UPDATE, DELETE)",
      DCL: "Data Control Language: Controls access (GRANT, REVOKE)",
      TCL: "Transaction Control Language: Manages transactions (COMMIT, ROLLBACK)",
    },
  },
  {
    id: 3,
    question: "What are the different types of joins in SQL?",
    answer: {
      INNER_JOIN: "Returns matching rows in both tables",
      LEFT_JOIN:
        "Returns all rows from the left table and matching rows from the right table",
      RIGHT_JOIN:
        "Returns all rows from the right table and matching rows from the left table",
      FULL_OUTER_JOIN: "Returns rows when there is a match in either table",
    },
  },
  {
    id: 4,
    question: "What is the difference between WHERE and HAVING clauses?",
    answer: {
      WHERE: "Filters rows before aggregation",
      HAVING: "Filters rows after aggregation",
    },
  },
  {
    id: 5,
    question: "What is the purpose of the GROUP BY statement?",
    answer:
      "Groups rows with the same values in specified columns for aggregate functions like SUM, COUNT, etc.",
  },
  {
    id: 6,
    question: "What is a primary key, and why is it important?",
    answer:
      "A primary key uniquely identifies each row in a table. It ensures that no duplicate values exist in the column(s).",
  },
  {
    id: 7,
    question: "What is the difference between CHAR and VARCHAR data types?",
    answer: {
      CHAR: "Fixed length, padded with spaces for shorter data",
      VARCHAR: "Variable length, no extra spaces",
    },
  },
  {
    id: 8,
    question: "Explain the difference between NULL and NOT NULL.",
    answer: {
      NULL: "No value (unknown/missing)",
      NOT_NULL: "Ensures a column always has a value",
    },
  },
  {
    id: 9,
    question:
      "What is a foreign key, and how does it maintain referential integrity?",
    answer:
      "A foreign key links a column in one table to a primary key in another table, ensuring consistent relationships.",
  },
  {
    id: 10,
    question:
      "What is a unique key, and how is it different from a primary key?",
    answer:
      "A unique key ensures unique column values. Unlike a primary key, it allows one NULL value.",
  },
  {
    id: 11,
    question: "How can you fetch only unique values from a table?",
    answer:
      "Use the DISTINCT keyword: SELECT DISTINCT column_name FROM table_name;",
  },
  {
    id: 12,
    question: "What is the use of the LIMIT or TOP keyword?",
    answer:
      "Restricts the number of rows returned by a query. Example: SELECT * FROM table_name LIMIT 10; (MySQL/PostgreSQL) or SELECT TOP 10 * FROM table_name; (SQL Server)",
  },
  {
    id: 13,
    question: "Explain the concept of indexing in SQL.",
    answer:
      "Indexing improves query performance by providing faster data retrieval but may slow down INSERT and UPDATE operations.",
  },
  {
    id: 14,
    question: "What is the difference between INNER JOIN and OUTER JOIN?",
    answer: {
      INNER_JOIN: "Only matching rows are returned",
      OUTER_JOIN:
        "Includes matching and non-matching rows (LEFT, RIGHT, FULL OUTER)",
    },
  },
  {
    id: 15,
    question: "How do you use the ORDER BY clause?",
    answer:
      "Sorts query results: SELECT * FROM table_name ORDER BY column_name ASC/DESC;",
  },
  {
    id: 16,
    question: "What is the difference between UNION and UNION ALL?",
    answer: {
      UNION: "Removes duplicates",
      UNION_ALL: "Includes duplicates",
    },
  },
  {
    id: 17,
    question: "Explain the use of subqueries in SQL.",
    answer:
      "A subquery is a query within another query, used for filtering, aggregating, or joining data.",
  },
  {
    id: 18,
    question: "What is a correlated subquery?",
    answer:
      "A subquery that depends on the outer query for its values. Example: SELECT e1.salary FROM employees e1 WHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department = e1.department);",
  },
  {
    id: 19,
    question: "What is the purpose of the CASE statement?",
    answer:
      "Performs conditional logic in SQL. Example: SELECT name, CASE WHEN salary > 50000 THEN 'High' ELSE 'Low' END AS salary_category FROM employees;",
  },
  {
    id: 20,
    question: "How does the COALESCE function work?",
    answer:
      "Returns the first non-NULL value. Example: SELECT COALESCE(column1, column2, 'Default') FROM table_name;",
  },
  {
    id: 21,
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer: {
      DELETE: "Removes specific rows",
      TRUNCATE: "Removes all rows (faster, less logging)",
      DROP: "Deletes the entire table",
    },
  },
  {
    id: 22,
    question: "How do you use the EXISTS keyword?",
    answer:
      "Checks if a subquery returns any rows. Example: SELECT * FROM employees WHERE EXISTS (SELECT 1 FROM departments WHERE department_id = employees.department_id);",
  },
  {
    id: 23,
    question: "What are window functions in SQL, and why are they useful?",
    answer:
      "Perform calculations across a set of rows related to the current row. Example: SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rank FROM employees;",
  },
  {
    id: 24,
    question:
      "What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?",
    answer: {
      "RANK()": "Gaps in ranking for ties",
      "DENSE_RANK()": "No gaps for ties",
      "ROW_NUMBER()": "Unique row numbering",
    },
  },
  {
    id: 25,
    question: "How do you calculate a running total in SQL?",
    answer:
      "SELECT name, salary, SUM(salary) OVER (ORDER BY id) AS running_total FROM employees;",
  },
  {
    id: 26,
    question:
      "What is the difference between scalar, inline, and multi-statement table-valued functions?",
    answer: {
      Scalar: "Returns a single value",
      "Inline Table-Valued": "Returns a table defined by a single query",
      "Multi-Statement Table-Valued":
        "Returns a table, defined by multiple statements",
    },
  },
  {
    id: 27,
    question:
      "What is the purpose of the WITH clause (Common Table Expressions)?",
    answer:
      "Creates a temporary, reusable result set for complex queries. Example: WITH CTE AS (SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id) SELECT * FROM CTE WHERE emp_count > 10;",
  },
  {
    id: 28,
    question: "How do you handle duplicates in SQL?",
    answer: {
      Method1: "Use DISTINCT: SELECT DISTINCT column_name FROM table_name;",
      Method2:
        "Remove duplicates with ROW_NUMBER(): WITH CTE AS (SELECT column_name, ROW_NUMBER() OVER (PARTITION BY column_name ORDER BY id) AS row_num FROM table_name) DELETE FROM CTE WHERE row_num > 1;",
    },
  },
  {
    id: 29,
    question: "What is a self-join, and when would you use it?",
    answer:
      "A self-join joins a table to itself, often for hierarchical data. Example: SELECT e1.name AS employee, e2.name AS manager FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.employee_id;",
  },
  {
    id: 30,
    question: "How do you update a record in a SQL table?",
    answer:
      "Use the UPDATE statement: UPDATE employees SET salary = salary * 1.1 WHERE department_id = 101;",
  },
  {
    id: 31,
    question:
      "What is the difference between a clustered and a non-clustered index?",
    answer: {
      "Clustered Index":
        "Physically rearranges table data based on the key. Only one per table.",
      "Non-Clustered Index":
        "Creates a separate structure with pointers to the data. Multiple allowed.",
    },
  },
  {
    id: 32,
    question:
      "Explain how database normalization works and its different normal forms.",
    answer: {
      "1NF": "Remove duplicate columns; ensure atomic values",
      "2NF": "1NF + no partial dependencies on composite keys",
      "3NF": "2NF + remove transitive dependencies",
      BCNF: "3NF + stricter rules for functional dependencies",
    },
  },
  {
    id: 33,
    question: "What is denormalization, and when is it preferred?",
    answer:
      "Combining tables to improve read performance, usually in OLAP systems. It sacrifices storage for faster queries.",
  },
  {
    id: 34,
    question:
      "What are the advantages and disadvantages of using stored procedures?",
    answer: {
      Advantages: "Precompiled, secure, reusable, and faster",
      Disadvantages: "Harder to debug and maintain, can lead to vendor lock-in",
    },
  },
  {
    id: 35,
    question: "Explain the ACID properties of a database.",
    answer: {
      Atomicity: "Transactions are all-or-nothing",
      Consistency: "Ensures the database remains in a valid state",
      Isolation: "Concurrent transactions don't interfere",
      Durability: "Data is saved permanently after a commit",
    },
  },
  {
    id: 36,
    question: "What is the purpose of triggers in SQL?",
    answer:
      "Triggers execute automatically in response to specific events like INSERT, UPDATE, or DELETE.",
  },
  {
    id: 37,
    question: "What is the difference between OLTP and OLAP systems?",
    answer: {
      OLTP: "Fast, real-time, operational queries",
      OLAP: "Analytical, slower, supports complex queries and aggregations",
    },
  },
  {
    id: 38,
    question: "How do you optimize a slow query in SQL?",
    answer: {
      Method1: "Use proper indexing",
      Method2: "Avoid SELECT *, fetch only necessary columns",
      Method3: "Optimize joins and subqueries",
      Method4: "Use query execution plans to identify bottlenecks",
    },
  },
  {
    id: 39,
    question:
      "What is partitioning in SQL, and how is it used for large datasets?",
    answer:
      "Dividing a table into smaller, manageable pieces for improved performance. Types include range, list, and hash partitioning.",
  },
  {
    id: 40,
    question: "Explain how transactions work in SQL.",
    answer:
      "Transactions group multiple operations into one unit. It's either committed (saved) or rolled back (undone) in case of failure.",
  },
  {
    id: 41,
    question:
      "What is a materialized view, and how is it different from a regular view?",
    answer: {
      "Regular View": "Virtual table based on a query",
      "Materialized View":
        "Stores query results physically for faster access, updated periodically",
    },
  },
  {
    id: 42,
    question: "How do you implement recursive queries in SQL?",
    answer:
      "Use CTEs with recursion: WITH RECURSIVE CTE AS (SELECT employee_id, manager_id FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.employee_id, e.manager_id FROM employees e JOIN CTE ON e.manager_id = CTE.employee_id) SELECT * FROM CTE;",
  },
  {
    id: 43,
    question: "What is the purpose of indexing, and what are the trade-offs?",
    answer:
      "Indexing improves query performance but increases storage space and slows down INSERT/UPDATE operations.",
  },
  {
    id: 44,
    question: "How do you enforce data integrity in SQL databases?",
    answer: {
      Method1: "Use constraints (PRIMARY KEY, FOREIGN KEY, CHECK, UNIQUE)",
      Method2: "Use triggers for custom rules",
    },
  },
  {
    id: 45,
    question: "What is sharding, and how does it differ from partitioning?",
    answer: {
      Partitioning: "Dividing a single table into pieces within one database",
      Sharding: "Distributing entire tables across multiple databases",
    },
  },
  {
    id: 46,
    question:
      "How would you write a query to find the second highest salary in a table?",
    answer:
      "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
  },
  {
    id: 47,
    question:
      "How can you find employees who earn more than the average salary?",
    answer:
      "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
  },
  {
    id: 48,
    question: "How do you join three or more tables in SQL?",
    answer:
      "SELECT * FROM table1 JOIN table2 ON table1.id = table2.id JOIN table3 ON table2.id = table3.id;",
  },
  {
    id: 49,
    question:
      "Write a query to retrieve the top 5 customers by total purchase amount.",
    answer:
      "SELECT customer_id, SUM(purchase_amount) AS total_spent FROM purchases GROUP BY customer_id ORDER BY total_spent DESC LIMIT 5;",
  },
  {
    id: 50,
    question:
      "How would you find the total sales for each region for the current year?",
    answer:
      "SELECT region, SUM(sales) AS total_sales FROM sales WHERE YEAR(sale_date) = YEAR(CURRENT_DATE) GROUP BY region;",
  },
];

export default ultimateDataAnalyticsAndDataScienceQuestionBank;
