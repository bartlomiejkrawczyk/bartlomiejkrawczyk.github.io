---
title: Custom Programming Language
description: |
    A full interpreter for a custom programming language, built from scratch with a lexer, parser, AST model, and runtime visitor-based interpreter-complete with configurable limits and robust error handling.
repositoryName: Language Interpreter
repository: https://github.com/bartlomiejkrawczyk/TKOM-23L
tags:
    - university
    - java
    - sql
---

# Functionality of the Language

The programming language currently being developed has a built-in data type - a dictionary -
which enables storing and manipulating data in the form of key–value pairs.
In this language, we can perform basic dictionary operations such as adding, removing,
searching for elements based on a key, and checking whether a given key exists in the dictionary.

An important aspect of the language is the ability to iterate over dictionary elements
in a defined order. This order is determined by a function passed
as an additional parameter to a method, allowing us to control the sequence
in which elements are returned. This enables more precise data management
and processing within the dictionary.

Additionally, the language offers the ability to perform LINQ-style
(Language Integrated Query) queries on dictionaries. LINQ is a powerful tool
that enables searching, filtering, and transforming data declaratively.
Thanks to LINQ integration, we can use these advanced data-processing techniques
without writing a large amount of code.

This language is statically typed. This means all data types must be declared
by the programmer, which allows the detection of type-related errors.

The language also uses strong typing, meaning that conversions between different types
require explicit definition and are not performed automatically.
This increases safety and code readability, eliminating ambiguous behavior
and unexpected results.

The interpreter for this programming language is implemented in Java 17.
Choosing Java as the implementation language allows leveraging the rich
and mature Java ecosystem and taking advantage of strong typing
and static analysis capabilities.

# Language Constructs

**Arithmetic operations:**

[Example program](src/test/resources/math.txt)

- `+` – addition
- `-` – subtraction
- `*` – multiplication
- `/` – division

Composition of algebraic expressions:

```groovy
int value = first * (second + third);
```

**Logical operations:**

[Example program](src/test/resources/logic.txt)

- `and` - conjunction
- `or` - disjunction
- `not` - negation

Logical expression composition:

```python
boolean expression = first and (second or third);
```

**Numeric casting:**

[Example program](src/test/resources/explicit-cast.txt)

- int to double - lossless
- double to int - floor (fractional truncation)

```python
int a = 1;
double b = 2.5;
double value = (@double a) + b;
```

**Variable visibility:**

[Example program](src/test/resources/visibility.txt)

- variables are visible only within the block where they were declared

```groovy
fun main() {
	if (true) {
		int a = 1;
	}
	int b = a; # error - `a` not visible outside the block
}
```

**Conditional statements:**

[Example program](src/test/resources/if.txt)

`if` statement:

```python
boolean expression = 2 + 2 == 4;

if expression {
	# do something
}

if expression doSomething();
```

`if-else`:

```python
boolean expression = 2 + 2 == 4;

if expression {
	# do something
} else {
	# do something else
}
```

Nested `if-else`:

```python
boolean first = 2 + 2 == 4;
boolean second = false;

if first {
	# do something
} else if second {
	# do something else on condition
}
```

**While loop:**

[Example program](src/test/resources/while.txt)

```python
boolean expression = true;
while expression {
	# do something
}
```

**Iteration over iterable structures:**

[Example program](src/test/resources/map.txt)

```groovy
Map<String, String> map = [];
for (Tuple<String, String> entry : map.iterator()) {
	# do something
}
```

**Functions:**

Parameterized:

```groovy
fun add(first: int, second: int): int {
	return first + second;
} 
```

Without return:

```groovy
fun log(message: String) {
	print(message);
} 
```

Parameterless:

```groovy
fun getOne(): int {
	return 1;
}
```

**Variable assignment:**

```groovy
int a = 1;
int b = 2;
int tmp = a;
a = b;
b = tmp;
```

Argument-passing semantics:

- arguments are passed **by reference**
- objects are passed via references, not by copying values
- changes inside a function are visible outside

Variable semantics:

- **static typing**

  - types must be declared
  - type cannot change at runtime
- **strong typing**

  - no implicit conversions
  - prevents ambiguity
- **mutability**

  - variables may be reassigned if the new value has the same type

**Function recursion:**

- functions may be called recursively

  - direct or indirect
  - recursion depth is limited
  - limit prevents infinite recursion and memory overflow
  - configurable parameter

```python
fun fibbonaci(n: int): int {
	if n == 0 return 0;
	if n == 1 return 1;
	return fibbonaci(n - 1) + fibbonaci(n - 2);
}
```

**Comments:**

```py
# Single-line comment
```

```groovy
/*
	Multi-line comment
*/
```

## Data Types

**Primitive types:**

- `int`

  - integers from `[-2147483648; 2147483647]`
- `double`

  - 64-bit floating-point
- `boolean`

  - `true`, `false`

Mathematical, logical, and comparison operations are defined for primitive types.

**Complex types:**

- `String`
- `Map<key, value>`

  - dictionary
- `Tuple<value, ...>`
- `Comparator<value>`
- `Iterable<value>`

## Pseudo-interfaces and built-ins

**String**

```kotlin
fun print(messsage: String);
```

**Comparator<value>**

```kotlin
class Comparator<V> {
	fun compare(this:V, other:V): int;
}

fun compareValues(this: int, other: int): int {
	return 1;
}
```

**Tuple<value, ...>**

```kotlin
class Tuple<V1, V2, V3, ...> {
	fun $name1: V1;
	fun $name2: V2;
	fun $name3: V3;
	...
}

Tuple<String, int, double> tuple = |
	value1 AS name1,
	value2 AS name2,
	value3 AS name3,
|;
```

**Map<key, value>**

```kotlin
class Map<K, V> {
	fun operator[](key: K): V;
	fun put(key: K, value: V);
	fun contains(key: K): boolean;
	fun remove(key: K);
	fun iterable(): Iterable<K, V>;
	fun sortedIterable(comparator: Comparator<K, V>): Iterable<K, V>;
}

fun operator[]: Map<key, value>;

Map<String, int> map = [
	"id_1": 1,
	"id_2": 2
];
```

**Iterable<value, ...>**

```kotlin
class Iterable<VALUE, ...> {
    fun hasNext(): boolean;
    fun next(): Tuple<VALUE, ...>;
}

Map<String, int> map = prepareMap(); # user defined function
Iterable<String, int> query =
	SELECT
		entry.key AS key,
		entry.value AS value
	FROM map AS entry
	WHERE entry.key != "abc" AND entry.value > 0
	ORDER BY entry.value, entry.key;
```

# Syntax

## Terminal Symbols

```kotlin
(* Regular expressions *)
letter                  = [a-zA-Z];
non_zero_digit          = [1-9];
digit                   = [0-9];
zero                    = "0";
character               = ?;
relation_operator       = "<" | "<=" | "==" | ">" | ">=" | "!="
addition_operator       = "+" | "-";
multiplication_operator = "*" | "/";

(* EBNF *)
INTEGER                 = zero
                        | non_zero_digit, {digit};
FLOATING_POINT          = INTEGER, ".", digit, {digit};
NUMBER                  = INTEGER
                        | FLOATING_POINT;
                        
BOOLEAN                 = "true"
                        | "false";

IDENTIFIER              = letter, {letter | digit};

CHARACTERS              = {character};
STRING_DOUBLE_QUOTE     = '"', CHARACTERS, '"';
STRING_SINGLE_QUOTE     = "'", CHARACTERS, "'";

STRING                  = STRING_DOUBLE_QUOTE
                        | STRING_SINGLE_QUOTE;

COMMENT_SINGLE_LINE     = "#", CHARACTERS , "\n";
COMMENT_MULTI_LINE      = "/*", CHARACTERS , "*/";

COMMENT                 = COMMENT_SINGLE_LINE
                        | COMMENT_MULTI_LINE;

SIMPLE_TYPE             = "int" 
                        | "double" 
                        | "boolean" 
                        | "String";

COMPLEX_TYPE            = "Map"
                        | "Comparator"
                        | "Iterable"
                        | "Tuple";
```

## Complex symbols

```kotlin
FUNCTION_DEFINITION    = "fun", IDENTIFIER, "(", [ARGUMENT_LIST], ")", [":", TYPE_DECLARATION], BLOCK;
ARGUMENT_LIST           = ARGUMENT_DECLARATION, {",", ARGUMENT_DECLARATION};
ARGUMENT_DECLARATION    = IDENTIFIER, ":", TYPE_DECLARATION;

TYPE_DECLARATION        = SIMPLE_TYPE
                        | COMPLEX_TYPE, "<", TYPE_DECLARATION, {",", TYPE_DECLARATION} ,">";

DECLARATION             = TYPE_DECLARATION, IDENTIFIER, "=", EXPRESSION, ";";

// STATEMENTS

BLOCK                   = "{", {STATEMENT} "}";

STATEMENT               = IF_STATEMENT
                        | WHILE_STATEMENT
                        | FOR_STATEMENT
                        | DECLARATION
                        | ASSIGNMENT_OR_IDENTIFIER_EXPRESSION
                        | RETURN_STATEMENT
                        | EXPRESSION, ";"
                        | BLOCK
                        | ";";

IF_STATEMENT            = "if", LOGICAL_EXPRESSION, STATEMENT,
                          ["else", STATEMENT];

WHILE_STATEMENT         = "while", LOGICAL_EXPRESSION, STATEMENT;

FOR_STATEMENT           = "for", "(", TYPE_DECLARATION, IDENTIFIER, ":", EXPRESSION, ")", STATEMENT;

ASSIGNMENT_OR_IDENTIFIER_EXPRESSION = [IDENTIFIER, "="], EXPRESSION, ";";

RETURN_STATEMENT        = "return", EXPRESSION, ";";

// EXPRESSION

EXPRESSION              = LOGICAL_EXPRESSION;

LOGICAL_EXPRESSION      = LOGICAL_OR_EXPRESSION;

LOGICAL_OR_EXPRESSION   = LOGICAL_AND_EXPRESSION, {"or", LOGICAL_AND_EXPRESSION};

LOGICAL_AND_EXPRESSION  = RELATION, {"and", RELATION};

RELATION                = ["not"], (BOOLEAN | ARITHMETIC_EXPRESSION, [relation_operator, ARITHMETIC_EXPRESSION]);

ARITHMETIC_EXPRESSION   = FACTOR, {addition_operator, FACTOR};

FACTOR                  = TERM, {multiplication_operator, TERM};

TERM                    = ["-"], (SIMPLE_TYPE | TUPLE_OR_METHOD_CALL);

SIMPLE_TYPE             = NUMBER | STRING;

TUPLE_METHOD_MAP_CALL   = SIMPLE_EXPRESSION, { (".", IDENTIFIER, [FUNCTION_ARGUMENTS] | "[", EXPRESSION,"]" ) };
FUNCTION_ARGUMENTS      = "(", [EXPRESSION, {",", EXPRESSION}], ")";

SIMPLE_EXPRESSION       = IDENTIFIER_OR_FUNCTION_CALL
                        | SELECT_EXPRESSION
                        | STANDALONE_TUPLE_EXP
                        | MAP_EXPRESSION
                        | EXPLICIT_CAST
                        | PARENTHESES_EXPRESSION;

IDENTIFIER_OR_FUNCTION_CALL = IDENTIFIER, [FUNCTION_ARGUMENTS];

SELECT_EXPRESSION       = "SELECT", TUPLE_EXPRESSION, "FROM", TUPLE_ELEMENT,
                          {"JOIN", TUPLE_ELEMENT, ["ON", EXPRESSION]},
                          ["WHERE", EXPRESSION],
                          ["GROUP", "BY", EXPRESSION, {",", EXPRESSION}, ["HAVING", EXPRESSION]],
                          ["ORDER", "BY", EXPRESSION, ["ASC" | "DESC"], {"," ORDER_BY_EXPRESSION}];

MAP_EXPRESSION          = "[", [EXPRESSION, ":", EXPRESSION, {",", EXPRESSION, ":", EXPRESSION}], "]";

STANDALONE_TUPLE_EXP    = "|", TUPLE_EXPRESSION, "|";
TUPLE_EXPRESSION        = TUPLE_ELEMENT, {",", TUPLE_ELEMENT};
TUPLE_ELEMENT           = EXPRESSION, "AS", IDENTIFIER;

EXPLICIT_CAST           = "@", TYPE_DECLARATION, EXPRESSION;

PARENTHESES_EXPRESSION  = "(", EXPRESSION, ")";
```

## Start symbol

```kotlin
PROGRAM = {COMMENT | FUNCTION_DEFINITION | DECLARATION | ";"};
```

# How to Run

The interpreter can be launched using the prepared script: `interpreter`

Example execution and result:

```bash
$ ./interpreter --help
Usage: ./interpreter [OPTION] [FILE]
    -h --help               Display this message
    -c --clean              Re-build project from scratch before running application
    -i --identifier [VALUE] Set the maximum number of characters in a identifier
                            Default: 100
    -s --string [VALUE]     Set the maximum number of characters in a string
                            Default: 1000
    -e --exception [VALUE]  Set the maximum number of exceptions before stopping execution of a program
                            Default: 500
    -f --function [VALUE]   Set the maximum number of nested function calls before stopping execution of program
                            Default: 100
$ ./interpreter hello.txt
Hello, World!
```

To run the script, Java 17 must be installed on the system.

The interpreter together with its libraries is packaged into a single **Fat Jar**,
which also allows running the program using the `java` command:

```bash
$ java -jar "$FAT_JAR" "$FILE"
```

### Alternative

It is also possible to run the program directly from the console.
In this case, you must first add a `shebang` header with the path to the interpreter:

```shell title=interpreter.sh
#!/mnt/c/Users/Public/Documents/TKOM/interpreter

fun main() {
    print("Hello, World!");
}
```

Execution is then done by calling the file directly:

```shell
$ ./hello.txt
Hello, World!
```

## Configuration

The language provides several configurable parameters:

* maximum identifier length

```shell
    -i --identifier [VALUE] Set the maximum number of characters in a identifier
                            Default: 100
```

* maximum string length

```shell
    -s --string [VALUE]     Set the maximum number of characters in a string
                            Default: 1000
```

* maximum number of non-critical errors before program execution should stop

```shell
    -e --exception [VALUE]  Set the maximum number of exceptions before stopping execution of a program
                            Default: 500
```

* maximum depth of nested function calls

```shell
    -f --function [VALUE]   Set the maximum number of nested function calls before stopping execution of program
                            Default: 100
```

# Implementation

## Lexer

### Interface

```java
public interface Lexer {
	Token nextToken();
}
```

The lexer is a key component in the lexical analysis process.
Its main task is to transform a stream of characters into a sequence of tokens
that represent valid language elements.

When creating a Lexer instance, a `Reader` is passed as an argument, providing
the character stream for analysis. The lexer exposes a method that returns subsequent tokens.

An important feature of the lexer is **lazy (on-demand) mode**.
This means it reads characters only when a new token is requested.
This allows efficient processing because it does not require loading
and analyzing the entire source text at once.

When the token retrieval method is called, the lexer reads the necessary number of characters
from the input stream and performs lexical analysis, producing the next token.

### Tokens

```java
public enum TokenType {
	END_OF_FILE,

	FUNCTION_DEFINITION("fun"),
	RETURN("return"),
	WHILE("while"),
	FOR("for"),
	IF("if"),
	ELSE("else"),

	SELECT("select", false),
	FROM("from", false),
	JOIN("join", false),
	ON("on", false),
	WHERE("where", false),
	GROUP("group", false),
	HAVING("having", false),
	ORDER("order", false),
	BY("by", false),
	ASCENDING("asc", false),
	DESCENDING("desc", false),

	AS("as", false),

	OPEN_CURLY_PARENTHESES("{"),
	OPEN_ROUND_PARENTHESES("("),
	OPEN_SQUARE_PARENTHESES("["),
	CLOSED_CURLY_PARENTHESES("}"),
	CLOSED_ROUND_PARENTHESES(")"),
	CLOSED_SQUARE_PARENTHESES("]"),
	VERTICAL_BAR_PARENTHESES("|"),

	SEMICOLON(";"),
	COLON(":"),
	COMMA(","),
	DOT("."),
	EXPLICIT_CAST("@"),

	AND("and", false),
	NOT("not", false),
	OR("or", false),

	EQUALITY("=="),
	INEQUALITY("!="),
	GREATER(">"),
	LESS("<"),
	GREATER_EQUAL(">="),
	LESS_EQUAL("<="),

	EQUALS("="),

	PLUS("+"),
	MINUS("-"),
	TIMES("*"),
	DIVIDE("/"),

	SINGLE_LINE_COMMENT("#", "\n"),
	MULTI_LINE_COMMENT("/*", "*/"),

	IDENTIFIER,
	INTEGER_CONSTANT,
	FLOATING_POINT_CONSTANT,
	STRING_DOUBLE_QUOTE_CONSTANT("\"", "\""),
	STRING_SINGLE_QUOTE_CONSTANT("'", "'"),

	BOOLEAN_TRUE("true"),
	BOOLEAN_FALSE("false"),

	INT("int"),
	DOUBLE("double"),
	BOOLEAN("boolean"),
	VOID("void"),

	STRING("String"),

	MAP("Map"),
	ITERABLE("Iterable"),
	TUPLE("Tuple"),
	COMPARATOR("Comparator"),
	;
	...
}
```

## Parser

### Interface

```java
public interface Parser {
	Program parseProgram() throws CriticalParserException;
}
```

The parser is a crucial component of the language implementation.
Its primary role is to analyze the syntactic structure of the source text
and generate an Abstract Syntax Tree (AST).

The AST is a hierarchical representation of the program’s structure.
It consists of nodes representing language constructs such as statements,
expressions, and declarations.

ASTs are easier to analyze and process than raw source text,
and they serve as the foundation for interpretation.

## Interpreter

### Interface

```java
public interface Interpreter {
	void execute(Program program);
}
```

```java
public interface Visitor {
	void visit(Program program);

	void visit(FunctionDefinitionStatement statement);

	void visit(DeclarationStatement statement);

	void visit(IfStatement statement);

	void visit(WhileStatement statement);

	void visit(ForStatement statement);

	void visit(AssignmentStatement statement);

	void visit(ReturnStatement statement);

	void visit(BlockStatement statement);

	void visit(BinaryLogicalExpression expression);

	void visit(NegateLogicalExpression expression);

	void visit(BooleanExpression value);

	void visit(RelationLogicalExpression expression);

	void visit(EqualityRelationLogicalExpression expression);

	void visit(BinaryArithmeticExpression expression);

	void visit(NegationArithmeticExpression expression);

	void visit(IntegerExpression value);

	void visit(FloatingPointExpression value);

	void visit(StringExpression value);

	void visit(TupleCallExpression expression);

	void visit(MethodCallExpression expression);

	void visit(IdentifierExpression expression);

	void visit(FunctionCallExpression expression);

	void visit(SelectExpression expression);

	void visit(TupleExpression expression);

	void visit(TupleElement expression);

	void visit(MapExpression expression);

	void visit(ExplicitCastExpression expression);

	void visit(PrintFunction expression);
}
```

`InterpretingVisitor` implements the `Visitor` interface, which contains methods
for visiting each type of AST node. Each `visit()` method defines how that specific node
should be interpreted.

It also implements the `Interpreter` interface, whose `interpret()` method
begins program execution by passing the AST root to `accept()`.


```java
public class InterpretingVisitor implements Visitor, Interpreter {
	...
}
```

Using the Visitor design pattern allows the interpreter to traverse the AST structure cleanly
and process each node according to its type.


## Obsługa błędów

```java
public interface ErrorHandler {
	void handleLexerException(LexerException exception);

	void handleParserException(ParserException exception);

	void handleInterpreterException(InterpreterException exception);

	void showExceptions(Reader reader) throws IOException;
}
```
Error handling covers multiple layers of the interpreter:

**Source**

* Errors are displayed to the user with appropriate messages
* Interpreter stops after encountering an error

**Lexer**

* Errors are forwarded to the ErrorHandler
* Excessively long identifiers, comments, or strings are truncated
* Overly long integers have the excess digits removed
* Floating-point numbers with too many fractional digits have extras ignored
* Unrecognized characters are skipped

**Parser**

* Errors are passed to the ErrorHandler
* Two types of errors: critical and non-critical
* Critical errors stop execution
* Non-critical errors (e.g., missing semicolon) are reported but don't halt parsing

**Interpreter**

* All interpreter errors are critical
* All errors are reported to the ErrorHandler

### Error Messages

Errors are collected and displayed to the user in a readable format.
Each line with errors is preceded by a line number, followed by detailed messages.

This format helps users identify problematic lines quickly and fix issues efficiently.

**Example code:**

```kotlin
#!/mnt/c/Users/Public/Documents/TKOM/interpreter

fun recursive() {
	print("recursion");
	recursive();
}

fun main() {
	recursive();
}
```

**Result:**

```shell
$ ./src/test/resources/error-recursion-limit.txt --function 5 
recursion
recursion
[INFO]    4:    print("recursion");
[ERROR] MaxFunctionStackSizeReachedException(super=CriticalInterpreterException(position=Position(line=4, characterNumber=8), contextStack=[~~main~~: Position(line=1, characterNumber=1), main: Position(line=1, characterNumber=1), recursive: Position(line=9, characterNumber=2), recursive: Position(line=5, characterNumber=2), recursive: Position(line=5, characterNumber=2), print: Position(line=4, characterNumber=2)])) - org.example.interpreter.error.MaxFunctionStackSizeReachedException:
~~main~~: Position(line=1, characterNumber=1)
main: Position(line=1, characterNumber=1)
recursive: Position(line=9, characterNumber=2)
recursive: Position(line=5, characterNumber=2)
recursive: Position(line=5, characterNumber=2)
print: Position(line=4, characterNumber=2)
```

On interpretation errors, the program stops and displays all related issues.

Additionally, the interpreter prints a **call stack trace**, showing
the chain of function calls leading to the error and the source code positions
where they occurred.

This gives the user a full picture of the error context, allowing faster debugging.
