export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to build modern web applications with React and TypeScript for better type safety and developer experience.',
    content: `# Getting Started with React and TypeScript

React and TypeScript make a powerful combination for building robust web applications. In this comprehensive guide, we'll explore how to set up and use them together effectively.

## Why TypeScript with React?

TypeScript brings several advantages to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete and refactoring capabilities
- **Improved Documentation**: Types serve as inline documentation
- **Team Collaboration**: Reduces bugs in large codebases

## Setting Up Your Environment

\`\`\`bash
# Create a new React app with TypeScript
npx create-react-app my-app --template typescript

# Or with Vite (faster alternative)
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Basic TypeScript Concepts for React

### Props Typing

\`\`\`typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
    >
      {text}
    </button>
  );
};
\`\`\`

### State Typing

\`\`\`typescript
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [items, setItems] = useState<string[]>([]);
\`\`\`

## Advanced Patterns

### Generic Components

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Best Practices

1. **Use interfaces for props**: Define clear contracts for your components
2. **Leverage union types**: For props that accept multiple specific values
3. **Use optional properties**: Make props optional when they have default values
4. **Type your hooks**: Always type useState, useReducer, and custom hooks

## Conclusion

React and TypeScript together provide a robust foundation for building scalable web applications. Start with basic typing and gradually adopt more advanced patterns as your project grows.`,
    author: 'John Doe',
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['React', 'TypeScript', 'Web Development'],
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '2',
    title: 'Python Setup and Installation Guide 2024',
    excerpt: 'Complete guide to setting up Python development environment on Windows, macOS, and Linux with virtual environments and package management.',
    content: `# Python Setup and Installation Guide 2024

Setting up Python correctly is crucial for a smooth development experience. This comprehensive guide covers everything you need to know about installing and configuring Python on different operating systems.

## Why Python?

Python has become one of the most popular programming languages due to its:

- **Simplicity**: Easy to read and write syntax
- **Versatility**: Used in web development, data science, AI, automation, and more
- **Large Community**: Extensive libraries and frameworks
- **Cross-platform**: Runs on Windows, macOS, and Linux

## Installing Python

### Windows Installation

1. **Download Python from python.org**
   - Visit [python.org/downloads](https://python.org/downloads)
   - Download the latest Python 3.x version
   - Choose the Windows installer (64-bit recommended)

2. **Run the Installer**
   \`\`\`bash
   # Important: Check "Add Python to PATH" during installation
   # This allows you to run Python from command prompt
   \`\`\`

3. **Verify Installation**
   \`\`\`bash
   python --version
   pip --version
   \`\`\`

### macOS Installation

**Option 1: Using Homebrew (Recommended)**
\`\`\`bash
# Install Homebrew if you haven't already
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python

# Verify installation
python3 --version
pip3 --version
\`\`\`

**Option 2: Official Installer**
- Download from python.org
- Run the .pkg installer
- Follow installation wizard

### Linux Installation

**Ubuntu/Debian:**
\`\`\`bash
# Update package list
sudo apt update

# Install Python 3 and pip
sudo apt install python3 python3-pip python3-venv

# Verify installation
python3 --version
pip3 --version
\`\`\`

**CentOS/RHEL/Fedora:**
\`\`\`bash
# For CentOS/RHEL
sudo yum install python3 python3-pip

# For Fedora
sudo dnf install python3 python3-pip

# Verify installation
python3 --version
pip3 --version
\`\`\`

## Setting Up Virtual Environments

Virtual environments are essential for Python development to avoid package conflicts.

### Using venv (Built-in)

\`\`\`bash
# Create a virtual environment
python -m venv myproject_env

# Activate virtual environment
# Windows:
myproject_env\\Scripts\\activate

# macOS/Linux:
source myproject_env/bin/activate

# Deactivate when done
deactivate
\`\`\`

### Using conda (Alternative)

\`\`\`bash
# Install Miniconda or Anaconda first
# Create environment
conda create --name myproject python=3.11

# Activate environment
conda activate myproject

# Deactivate
conda deactivate
\`\`\`

## Package Management with pip

### Basic pip Commands

\`\`\`bash
# Install a package
pip install requests

# Install specific version
pip install django==4.2.0

# Install from requirements file
pip install -r requirements.txt

# List installed packages
pip list

# Show package information
pip show requests

# Uninstall package
pip uninstall requests

# Upgrade package
pip install --upgrade requests
\`\`\`

### Creating Requirements File

\`\`\`bash
# Generate requirements.txt
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt
\`\`\`

## IDE and Editor Setup

### Visual Studio Code
1. Install Python extension
2. Configure Python interpreter
3. Set up linting and formatting

\`\`\`json
// settings.json
{
    "python.defaultInterpreterPath": "./venv/bin/python",
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "python.formatting.provider": "black"
}
\`\`\`

### PyCharm
- Professional IDE with excellent Python support
- Built-in virtual environment management
- Advanced debugging and testing tools

## Essential Development Tools

### Code Formatting
\`\`\`bash
# Install Black (code formatter)
pip install black

# Format code
black my_script.py
\`\`\`

### Linting
\`\`\`bash
# Install pylint
pip install pylint

# Lint code
pylint my_script.py
\`\`\`

### Testing
\`\`\`bash
# Install pytest
pip install pytest

# Run tests
pytest
\`\`\`

## Best Practices

1. **Always use virtual environments** for projects
2. **Keep requirements.txt updated** for reproducible environments
3. **Use meaningful environment names** that reflect your project
4. **Pin package versions** in production
5. **Regularly update packages** but test thoroughly

## Troubleshooting Common Issues

### PATH Issues
If Python isn't recognized:
\`\`\`bash
# Windows: Add Python to PATH manually
# macOS/Linux: Add to ~/.bashrc or ~/.zshrc
export PATH="/usr/local/bin/python3:$PATH"
\`\`\`

### Permission Errors
\`\`\`bash
# Use --user flag for user-level installation
pip install --user package_name

# Or use virtual environments (recommended)
\`\`\`

## Conclusion

A proper Python setup is the foundation of successful development. Take time to configure your environment correctly, and you'll save hours of debugging later. Remember to use virtual environments for every project and keep your tools updated.

Happy coding! 🐍`,
    author: 'Sarah Chen',
    publishedAt: '2024-01-20',
    readTime: 10,
    tags: ['Python', 'Setup', 'Installation', 'Environment'],
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '3',
    title: 'Python Variables and Data Types Explained',
    excerpt: 'Master Python variables, data types, and type hints. Learn about strings, numbers, lists, dictionaries, and best practices for variable naming.',
    content: `# Python Variables and Data Types Explained

Understanding variables and data types is fundamental to Python programming. This comprehensive guide covers everything from basic variable assignment to advanced type hints and best practices.

## What are Variables?

Variables in Python are containers that store data values. Unlike other programming languages, Python variables don't need explicit declaration and are dynamically typed.

\`\`\`python
# Variable assignment
name = "Alice"
age = 30
is_student = True

print(f"Name: {name}, Age: {age}, Student: {is_student}")
\`\`\`

## Variable Naming Rules and Conventions

### Rules (Must Follow)
- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive
- Cannot use Python keywords

\`\`\`python
# Valid variable names
user_name = "john"
_private_var = 42
userName2 = "jane"

# Invalid variable names
# 2name = "invalid"  # Starts with number
# user-name = "invalid"  # Contains hyphen
# class = "invalid"  # Python keyword
\`\`\`

### Conventions (Should Follow)
\`\`\`python
# Snake case for variables and functions
user_name = "john"
total_amount = 100.50

# Constants in UPPER_CASE
MAX_CONNECTIONS = 100
API_KEY = "your-api-key"

# Class names in PascalCase
class UserAccount:
    pass
\`\`\`

## Basic Data Types

### Numbers

#### Integers
\`\`\`python
# Integer examples
age = 25
population = 1000000
negative_num = -42

# Integer operations
a = 10
b = 3

print(f"Addition: {a + b}")        # 13
print(f"Subtraction: {a - b}")     # 7
print(f"Multiplication: {a * b}")  # 30
print(f"Division: {a / b}")        # 3.333...
print(f"Floor Division: {a // b}") # 3
print(f"Modulus: {a % b}")         # 1
print(f"Exponentiation: {a ** b}") # 1000
\`\`\`

#### Floats
\`\`\`python
# Float examples
price = 19.99
temperature = -5.5
scientific = 1.5e-4  # 0.00015

# Float precision
import math
print(f"Pi: {math.pi}")
print(f"Rounded: {round(math.pi, 2)}")
\`\`\`

#### Complex Numbers
\`\`\`python
# Complex numbers
z1 = 3 + 4j
z2 = complex(2, -1)

print(f"z1: {z1}")
print(f"z2: {z2}")
print(f"z1 + z2: {z1 + z2}")
\`\`\`

### Strings

\`\`\`python
# String creation
single_quotes = 'Hello World'
double_quotes = "Hello World"
triple_quotes = """
Multi-line
string
"""

# String operations
first_name = "John"
last_name = "Doe"

# Concatenation
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# f-strings (recommended)
greeting = f"Hello, {first_name}!"
print(greeting)  # Hello, John!

# String methods
text = "  Python Programming  "
print(f"Original: '{text}'")
print(f"Strip: '{text.strip()}'")
print(f"Upper: '{text.upper()}'")
print(f"Lower: '{text.lower()}'")
print(f"Replace: '{text.replace('Python', 'Java')}'")
print(f"Split: {text.strip().split()}")
\`\`\`

### Booleans

\`\`\`python
# Boolean values
is_active = True
is_complete = False

# Boolean operations
a = True
b = False

print(f"AND: {a and b}")  # False
print(f"OR: {a or b}")    # True
print(f"NOT: {not a}")    # False

# Truthy and Falsy values
print(bool(0))        # False
print(bool(1))        # True
print(bool(""))       # False
print(bool("hello"))  # True
print(bool([]))       # False
print(bool([1, 2]))   # True
\`\`\`

## Collection Data Types

### Lists

\`\`\`python
# List creation
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# List operations
fruits.append("grape")          # Add to end
fruits.insert(1, "kiwi")       # Insert at index
fruits.remove("banana")        # Remove by value
popped = fruits.pop()          # Remove and return last
fruits.sort()                  # Sort in place

print(f"Fruits: {fruits}")
print(f"First fruit: {fruits[0]}")
print(f"Last fruit: {fruits[-1]}")
print(f"Slice: {fruits[1:3]}")

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")  # [1, 4, 9, 16, 25]
\`\`\`

### Tuples

\`\`\`python
# Tuple creation (immutable)
coordinates = (10, 20)
colors = ("red", "green", "blue")
single_item = ("item",)  # Note the comma

# Tuple unpacking
x, y = coordinates
print(f"X: {x}, Y: {y}")

# Named tuples
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(f"Point: {p.x}, {p.y}")
\`\`\`

### Dictionaries

\`\`\`python
# Dictionary creation
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Dictionary operations
person["email"] = "alice@example.com"  # Add key-value
person["age"] = 31                     # Update value
del person["city"]                     # Delete key

print(f"Person: {person}")
print(f"Name: {person.get('name', 'Unknown')}")

# Dictionary methods
print(f"Keys: {list(person.keys())}")
print(f"Values: {list(person.values())}")
print(f"Items: {list(person.items())}")

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(1, 6)}
print(f"Squares dict: {squares_dict}")
\`\`\`

### Sets

\`\`\`python
# Set creation (unique elements)
fruits = {"apple", "banana", "orange", "apple"}  # Duplicate removed
print(f"Fruits set: {fruits}")

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

print(f"Union: {set1 | set2}")           # {1, 2, 3, 4, 5, 6}
print(f"Intersection: {set1 & set2}")    # {3, 4}
print(f"Difference: {set1 - set2}")      # {1, 2}
print(f"Symmetric diff: {set1 ^ set2}")  # {1, 2, 5, 6}
\`\`\`

## Type Checking and Conversion

### Type Checking
\`\`\`python
# Check variable types
name = "Alice"
age = 30
scores = [85, 90, 78]

print(f"Type of name: {type(name)}")      # <class 'str'>
print(f"Type of age: {type(age)}")        # <class 'int'>
print(f"Type of scores: {type(scores)}")  # <class 'list'>

# isinstance() function
print(f"Is name a string? {isinstance(name, str)}")      # True
print(f"Is age a number? {isinstance(age, (int, float))}")  # True
\`\`\`

### Type Conversion
\`\`\`python
# Explicit type conversion
num_str = "123"
num_int = int(num_str)
num_float = float(num_str)

print(f"String: {num_str} (type: {type(num_str)})")
print(f"Integer: {num_int} (type: {type(num_int)})")
print(f"Float: {num_float} (type: {type(num_float)})")

# Converting collections
numbers_list = [1, 2, 3, 4, 5]
numbers_tuple = tuple(numbers_list)
numbers_set = set(numbers_list)

print(f"List: {numbers_list}")
print(f"Tuple: {numbers_tuple}")
print(f"Set: {numbers_set}")
\`\`\`

## Type Hints (Python 3.5+)

Type hints make code more readable and help with IDE support and static analysis.

\`\`\`python
from typing import List, Dict, Optional, Union

# Basic type hints
def greet(name: str) -> str:
    return f"Hello, {name}!"

def add_numbers(a: int, b: int) -> int:
    return a + b

# Collection type hints
def process_scores(scores: List[int]) -> float:
    return sum(scores) / len(scores)

def get_user_info(user_id: int) -> Dict[str, Union[str, int]]:
    return {
        "id": user_id,
        "name": "John Doe",
        "age": 30
    }

# Optional types
def find_user(user_id: int) -> Optional[str]:
    users = {1: "Alice", 2: "Bob"}
    return users.get(user_id)

# Variable annotations
name: str = "Alice"
age: int = 30
scores: List[int] = [85, 90, 78]
user_data: Dict[str, Union[str, int]] = {"name": "John", "age": 25}
\`\`\`

## Best Practices

### 1. Use Descriptive Names
\`\`\`python
# Bad
x = 100
d = {"n": "John", "a": 25}

# Good
max_connections = 100
user_info = {"name": "John", "age": 25}
\`\`\`

### 2. Use Type Hints
\`\`\`python
def calculate_total(prices: List[float], tax_rate: float) -> float:
    subtotal = sum(prices)
    return subtotal * (1 + tax_rate)
\`\`\`

### 3. Initialize Variables Properly
\`\`\`python
# Initialize collections
users = []  # Empty list
config = {}  # Empty dict

# Use None for optional values
current_user = None
\`\`\`

### 4. Use Constants for Magic Numbers
\`\`\`python
# Bad
if age >= 18:
    print("Adult")

# Good
ADULT_AGE = 18
if age >= ADULT_AGE:
    print("Adult")
\`\`\`

## Common Pitfalls

### 1. Mutable Default Arguments
\`\`\`python
# Bad
def add_item(item, items=[]):
    items.append(item)
    return items

# Good
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
\`\`\`

### 2. Variable Scope
\`\`\`python
# Understanding scope
global_var = "I'm global"

def my_function():
    local_var = "I'm local"
    print(global_var)  # Can access global
    print(local_var)   # Can access local

# print(local_var)  # Error: local_var not accessible here
\`\`\`

## Conclusion

Understanding Python variables and data types is crucial for writing effective Python code. Remember to:

- Use descriptive variable names
- Choose appropriate data types
- Leverage type hints for better code documentation
- Follow Python naming conventions
- Be aware of mutability and scope

Master these fundamentals, and you'll have a solid foundation for more advanced Python concepts!`,
    author: 'Mike Rodriguez',
    publishedAt: '2024-01-18',
    readTime: 12,
    tags: ['Python', 'Variables', 'Data Types', 'Fundamentals'],
    imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '4',
    title: 'Python Classes and Object-Oriented Programming',
    excerpt: 'Deep dive into Python OOP concepts including classes, objects, inheritance, polymorphism, and advanced features like decorators and metaclasses.',
    content: `# Python Classes and Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into classes and objects. Python's OOP implementation is powerful and flexible, making it easy to create maintainable and reusable code.

## What is Object-Oriented Programming?

OOP is based on four main principles:
- **Encapsulation**: Bundling data and methods together
- **Inheritance**: Creating new classes based on existing ones
- **Polymorphism**: Using a single interface for different types
- **Abstraction**: Hiding complex implementation details

## Basic Class Syntax

### Creating Your First Class

\`\`\`python
class Person:
    """A simple Person class"""
    
    def __init__(self, name, age):
        """Constructor method"""
        self.name = name
        self.age = age
    
    def introduce(self):
        """Method to introduce the person"""
        return f"Hi, I'm {self.name} and I'm {self.age} years old."
    
    def have_birthday(self):
        """Method to increment age"""
        self.age += 1
        return f"Happy birthday! {self.name} is now {self.age}."

# Creating objects (instances)
person1 = Person("Alice", 30)
person2 = Person("Bob", 25)

print(person1.introduce())  # Hi, I'm Alice and I'm 30 years old.
print(person2.have_birthday())  # Happy birthday! Bob is now 26.
\`\`\`

### Class vs Instance Variables

\`\`\`python
class Dog:
    # Class variable (shared by all instances)
    species = "Canis lupus"
    
    def __init__(self, name, breed):
        # Instance variables (unique to each instance)
        self.name = name
        self.breed = breed
        self.tricks = []  # Each dog has its own list of tricks
    
    def add_trick(self, trick):
        self.tricks.append(trick)
    
    def show_tricks(self):
        return f"{self.name} knows: {', '.join(self.tricks)}"

# Creating instances
dog1 = Dog("Buddy", "Golden Retriever")
dog2 = Dog("Max", "German Shepherd")

# Class variable is shared
print(f"Dog1 species: {dog1.species}")  # Canis lupus
print(f"Dog2 species: {dog2.species}")  # Canis lupus

# Instance variables are separate
dog1.add_trick("sit")
dog1.add_trick("fetch")
dog2.add_trick("roll over")

print(dog1.show_tricks())  # Buddy knows: sit, fetch
print(dog2.show_tricks())  # Max knows: roll over
\`\`\`

## Advanced Class Features

### Property Decorators

\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius  # Private attribute convention
    
    @property
    def radius(self):
        """Getter for radius"""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Setter for radius with validation"""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        """Computed property"""
        import math
        return math.pi * self._radius ** 2
    
    @property
    def circumference(self):
        """Another computed property"""
        import math
        return 2 * math.pi * self._radius

# Usage
circle = Circle(5)
print(f"Radius: {circle.radius}")           # 5
print(f"Area: {circle.area:.2f}")           # 78.54
print(f"Circumference: {circle.circumference:.2f}")  # 31.42

# Using setter
circle.radius = 10
print(f"New area: {circle.area:.2f}")       # 314.16

# This would raise an error:
# circle.radius = -5  # ValueError: Radius cannot be negative
\`\`\`

### Class Methods and Static Methods

\`\`\`python
class MathUtils:
    pi = 3.14159
    
    def __init__(self, name):
        self.name = name
    
    @classmethod
    def create_default(cls):
        """Class method - alternative constructor"""
        return cls("Default Calculator")
    
    @staticmethod
    def add(a, b):
        """Static method - utility function"""
        return a + b
    
    @staticmethod
    def multiply(a, b):
        """Another static method"""
        return a * b
    
    def calculate_circle_area(self, radius):
        """Instance method"""
        return self.pi * radius ** 2

# Using class method
calc1 = MathUtils("My Calculator")
calc2 = MathUtils.create_default()

print(f"Calc1 name: {calc1.name}")  # My Calculator
print(f"Calc2 name: {calc2.name}")  # Default Calculator

# Using static methods
print(f"Add: {MathUtils.add(5, 3)}")      # 8
print(f"Multiply: {MathUtils.multiply(4, 7)}")  # 28

# Using instance method
print(f"Circle area: {calc1.calculate_circle_area(5):.2f}")  # 78.54
\`\`\`

## Inheritance

### Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        return f"{self.name} makes a sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")  # Call parent constructor
        self.breed = breed
    
    def make_sound(self):  # Override parent method
        return f"{self.name} barks: Woof!"
    
    def fetch(self):  # New method specific to Dog
        return f"{self.name} fetches the ball"

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Cat")
        self.indoor = indoor
    
    def make_sound(self):  # Override parent method
        return f"{self.name} meows: Meow!"
    
    def climb(self):  # New method specific to Cat
        return f"{self.name} climbs the tree"

# Usage
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", indoor=True)

print(dog.info())        # Buddy is a Dog
print(dog.make_sound())  # Buddy barks: Woof!
print(dog.fetch())       # Buddy fetches the ball

print(cat.info())        # Whiskers is a Cat
print(cat.make_sound())  # Whiskers meows: Meow!
print(cat.climb())       # Whiskers climbs the tree
\`\`\`

### Multiple Inheritance

\`\`\`python
class Flyable:
    def fly(self):
        return f"{self.name} is flying"

class Swimmable:
    def swim(self):
        return f"{self.name} is swimming"

class Duck(Animal, Flyable, Swimmable):
    def __init__(self, name):
        super().__init__(name, "Duck")
    
    def make_sound(self):
        return f"{self.name} quacks: Quack!"

# Usage
duck = Duck("Donald")
print(duck.info())       # Donald is a Duck
print(duck.make_sound()) # Donald quacks: Quack!
print(duck.fly())        # Donald is flying
print(duck.swim())       # Donald is swimming

# Check Method Resolution Order (MRO)
print(Duck.__mro__)
\`\`\`

## Polymorphism

\`\`\`python
def animal_concert(animals):
    """Demonstrate polymorphism"""
    for animal in animals:
        print(animal.make_sound())

# Create different animals
animals = [
    Dog("Buddy", "Golden Retriever"),
    Cat("Whiskers"),
    Duck("Donald")
]

# All animals respond to make_sound() differently
animal_concert(animals)
# Output:
# Buddy barks: Woof!
# Whiskers meows: Meow!
# Donald quacks: Quack!
\`\`\`

## Abstract Base Classes

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    """Abstract base class for shapes"""
    
    @abstractmethod
    def area(self):
        """Abstract method - must be implemented by subclasses"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """Abstract method - must be implemented by subclasses"""
        pass
    
    def description(self):
        """Concrete method - can be used by subclasses"""
        return f"This is a {self.__class__.__name__}"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# Usage
rectangle = Rectangle(5, 3)
circle = Circle(4)

shapes = [rectangle, circle]

for shape in shapes:
    print(f"{shape.description()}")
    print(f"Area: {shape.area():.2f}")
    print(f"Perimeter: {shape.perimeter():.2f}")
    print("-" * 30)

# This would raise an error:
# shape = Shape()  # TypeError: Can't instantiate abstract class
\`\`\`

## Special Methods (Magic Methods)

\`\`\`python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """String representation for users"""
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        """String representation for developers"""
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    def __len__(self):
        """Length of the book (number of pages)"""
        return self.pages
    
    def __eq__(self, other):
        """Equality comparison"""
        if isinstance(other, Book):
            return (self.title == other.title and 
                   self.author == other.author)
        return False
    
    def __lt__(self, other):
        """Less than comparison (by pages)"""
        if isinstance(other, Book):
            return self.pages < other.pages
        return NotImplemented
    
    def __add__(self, other):
        """Addition (combine pages)"""
        if isinstance(other, Book):
            return self.pages + other.pages
        return NotImplemented

# Usage
book1 = Book("1984", "George Orwell", 328)
book2 = Book("Animal Farm", "George Orwell", 112)
book3 = Book("1984", "George Orwell", 328)

print(str(book1))    # 1984 by George Orwell
print(repr(book1))   # Book('1984', 'George Orwell', 328)
print(len(book1))    # 328

print(book1 == book3)  # True
print(book1 == book2)  # False
print(book2 < book1)   # True (112 < 328)
print(book1 + book2)   # 440 (328 + 112)
\`\`\`

## Composition vs Inheritance

### Composition Example

\`\`\`python
class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower
        self.running = False
    
    def start(self):
        self.running = True
        return "Engine started"
    
    def stop(self):
        self.running = False
        return "Engine stopped"

class Car:
    def __init__(self, make, model, horsepower):
        self.make = make
        self.model = model
        self.engine = Engine(horsepower)  # Composition
        self.speed = 0
    
    def start(self):
        return self.engine.start()
    
    def stop(self):
        self.speed = 0
        return self.engine.stop()
    
    def accelerate(self, amount):
        if self.engine.running:
            self.speed += amount
            return f"Accelerating to {self.speed} mph"
        return "Cannot accelerate - engine not running"

# Usage
car = Car("Toyota", "Camry", 200)
print(car.start())           # Engine started
print(car.accelerate(30))    # Accelerating to 30 mph
print(car.stop())            # Engine stopped
\`\`\`

## Best Practices

### 1. Use Clear Class Names
\`\`\`python
# Good
class UserAccount:
    pass

class PaymentProcessor:
    pass

# Avoid generic names like Data, Manager, Handler
\`\`\`

### 2. Keep Classes Focused (Single Responsibility)
\`\`\`python
# Good - each class has one responsibility
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

class EmailService:
    def send_email(self, user, message):
        # Send email logic
        pass

class UserRepository:
    def save_user(self, user):
        # Database save logic
        pass
\`\`\`

### 3. Use Type Hints
\`\`\`python
from typing import List, Optional

class Student:
    def __init__(self, name: str, grades: List[float]):
        self.name = name
        self.grades = grades
    
    def add_grade(self, grade: float) -> None:
        self.grades.append(grade)
    
    def get_average(self) -> Optional[float]:
        if not self.grades:
            return None
        return sum(self.grades) / len(self.grades)
\`\`\`

### 4. Use Properties for Computed Values
\`\`\`python
class Rectangle:
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height
    
    @property
    def area(self) -> float:
        return self.width * self.height
    
    @property
    def diagonal(self) -> float:
        return (self.width ** 2 + self.height ** 2) ** 0.5
\`\`\`

## Common Patterns

### Singleton Pattern
\`\`\`python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Usage
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True - same instance
\`\`\`

### Factory Pattern
\`\`\`python
class Animal:
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

class AnimalFactory:
    @staticmethod
    def create_animal(animal_type: str) -> Animal:
        if animal_type.lower() == "dog":
            return Dog()
        elif animal_type.lower() == "cat":
            return Cat()
        else:
            raise ValueError(f"Unknown animal type: {animal_type}")

# Usage
dog = AnimalFactory.create_animal("dog")
cat = AnimalFactory.create_animal("cat")
print(dog.make_sound())  # Woof!
print(cat.make_sound())  # Meow!
\`\`\`

## Conclusion

Python's OOP features provide powerful tools for organizing and structuring code:

- **Classes and Objects**: Foundation of OOP
- **Inheritance**: Code reuse and specialization
- **Polymorphism**: Flexible interfaces
- **Encapsulation**: Data protection and organization
- **Composition**: Alternative to inheritance
- **Special Methods**: Customize object behavior

Master these concepts to write more maintainable, reusable, and elegant Python code!`,
    author: 'Dr. Emily Watson',
    publishedAt: '2024-01-16',
    readTime: 15,
    tags: ['Python', 'OOP', 'Classes', 'Inheritance'],
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '5',
    title: 'Python and Large Language Models (LLMs)',
    excerpt: 'Comprehensive guide to working with LLMs in Python, including OpenAI API, Hugging Face Transformers, and building AI applications.',
    content: `# Python and Large Language Models (LLMs)

Large Language Models have revolutionized AI applications, and Python is the go-to language for working with these powerful tools. This guide covers everything from basic API usage to building sophisticated AI applications.

## What are Large Language Models?

LLMs are AI models trained on vast amounts of text data to understand and generate human-like text. Popular examples include:

- **GPT-4** (OpenAI)
- **Claude** (Anthropic)
- **LLaMA** (Meta)
- **BERT** (Google)
- **T5** (Google)

## Setting Up Your Environment

### Installing Required Libraries

\`\`\`bash
# Core libraries
pip install openai
pip install transformers
pip install torch
pip install langchain
pip install streamlit

# Additional utilities
pip install python-dotenv
pip install requests
pip install pandas
pip install numpy
\`\`\`

### Environment Configuration

\`\`\`python
# .env file
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
\`\`\`

\`\`\`python
# config.py
import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
\`\`\`

## Working with OpenAI API

### Basic Chat Completion

\`\`\`python
import openai
from config import OPENAI_API_KEY

# Initialize the client
client = openai.OpenAI(api_key=OPENAI_API_KEY)

def chat_with_gpt(message, model="gpt-3.5-turbo"):
    """Simple chat function"""
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "user", "content": message}
            ],
            max_tokens=150,
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"

# Usage
response = chat_with_gpt("Explain quantum computing in simple terms")
print(response)
\`\`\`

### Advanced Chat with Context

\`\`\`python
class ChatBot:
    def __init__(self, model="gpt-3.5-turbo", system_prompt=None):
        self.client = openai.OpenAI(api_key=OPENAI_API_KEY)
        self.model = model
        self.conversation_history = []
        
        if system_prompt:
            self.conversation_history.append({
                "role": "system", 
                "content": system_prompt
            })
    
    def chat(self, message):
        """Chat with context preservation"""
        # Add user message to history
        self.conversation_history.append({
            "role": "user", 
            "content": message
        })
        
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=self.conversation_history,
                max_tokens=500,
                temperature=0.7
            )
            
            # Add assistant response to history
            assistant_message = response.choices[0].message.content
            self.conversation_history.append({
                "role": "assistant", 
                "content": assistant_message
            })
            
            return assistant_message
            
        except Exception as e:
            return f"Error: {str(e)}"
    
    def clear_history(self):
        """Clear conversation history"""
        self.conversation_history = []
    
    def get_history(self):
        """Get conversation history"""
        return self.conversation_history

# Usage
bot = ChatBot(
    system_prompt="You are a helpful Python programming assistant."
)

print(bot.chat("How do I create a list in Python?"))
print(bot.chat("Can you show me an example with numbers?"))
print(bot.chat("What about list comprehensions?"))
\`\`\`

### Function Calling

\`\`\`python
import json
import requests

def get_weather(city):
    """Mock weather function"""
    # In real implementation, you'd call a weather API
    weather_data = {
        "New York": {"temperature": 22, "condition": "Sunny"},
        "London": {"temperature": 15, "condition": "Cloudy"},
        "Tokyo": {"temperature": 28, "condition": "Rainy"}
    }
    return weather_data.get(city, {"temperature": 20, "condition": "Unknown"})

def chat_with_functions(message):
    """Chat with function calling capability"""
    functions = [
        {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "The city name"
                    }
                },
                "required": ["city"]
            }
        }
    ]
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": message}],
        functions=functions,
        function_call="auto"
    )
    
    message = response.choices[0].message
    
    if message.function_call:
        function_name = message.function_call.name
        function_args = json.loads(message.function_call.arguments)
        
        if function_name == "get_weather":
            weather_info = get_weather(function_args["city"])
            return f"Weather in {function_args['city']}: {weather_info['temperature']}°C, {weather_info['condition']}"
    
    return message.content

# Usage
print(chat_with_functions("What's the weather like in Tokyo?"))
\`\`\`

## Working with Hugging Face Transformers

### Text Generation

\`\`\`python
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
import torch

class LocalLLM:
    def __init__(self, model_name="microsoft/DialoGPT-medium"):
        self.model_name = model_name
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForCausalLM.from_pretrained(model_name)
        
        # Add padding token if it doesn't exist
        if self.tokenizer.pad_token is None:
            self.tokenizer.pad_token = self.tokenizer.eos_token
    
    def generate_text(self, prompt, max_length=100, temperature=0.7):
        """Generate text using local model"""
        inputs = self.tokenizer.encode(prompt, return_tensors="pt")
        
        with torch.no_grad():
            outputs = self.model.generate(
                inputs,
                max_length=max_length,
                temperature=temperature,
                do_sample=True,
                pad_token_id=self.tokenizer.eos_token_id
            )
        
        generated_text = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return generated_text[len(prompt):].strip()

# Usage
llm = LocalLLM()
response = llm.generate_text("The future of artificial intelligence is")
print(response)
\`\`\`

### Text Classification

\`\`\`python
from transformers import pipeline

class TextClassifier:
    def __init__(self):
        self.sentiment_analyzer = pipeline(
            "sentiment-analysis",
            model="cardiffnlp/twitter-roberta-base-sentiment-latest"
        )
        self.emotion_analyzer = pipeline(
            "text-classification",
            model="j-hartmann/emotion-english-distilroberta-base"
        )
    
    def analyze_sentiment(self, text):
        """Analyze sentiment of text"""
        result = self.sentiment_analyzer(text)
        return {
            "sentiment": result[0]["label"],
            "confidence": result[0]["score"]
        }
    
    def analyze_emotion(self, text):
        """Analyze emotion in text"""
        result = self.emotion_analyzer(text)
        return {
            "emotion": result[0]["label"],
            "confidence": result[0]["score"]
        }
    
    def analyze_text(self, text):
        """Complete text analysis"""
        return {
            "text": text,
            "sentiment": self.analyze_sentiment(text),
            "emotion": self.analyze_emotion(text)
        }

# Usage
classifier = TextClassifier()
analysis = classifier.analyze_text("I'm so excited about this new project!")
print(analysis)
\`\`\`

## Building AI Applications with LangChain

### Document Q&A System

\`\`\`python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

class DocumentQA:
    def __init__(self, documents_path):
        self.documents_path = documents_path
        self.vectorstore = None
        self.qa_chain = None
        self.setup_qa_system()
    
    def setup_qa_system(self):
        """Set up the Q&A system"""
        # Load documents
        loader = TextLoader(self.documents_path)
        documents = loader.load()
        
        # Split documents into chunks
        text_splitter = CharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        texts = text_splitter.split_documents(documents)
        
        # Create embeddings and vector store
        embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
        self.vectorstore = FAISS.from_documents(texts, embeddings)
        
        # Create Q&A chain
        llm = OpenAI(openai_api_key=OPENAI_API_KEY, temperature=0)
        self.qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=self.vectorstore.as_retriever()
        )
    
    def ask_question(self, question):
        """Ask a question about the documents"""
        if self.qa_chain:
            return self.qa_chain.run(question)
        return "Q&A system not initialized"

# Usage
# qa_system = DocumentQA("path/to/your/documents.txt")
# answer = qa_system.ask_question("What is the main topic of the document?")
# print(answer)
\`\`\`

### Custom Prompt Templates

\`\`\`python
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.llms import OpenAI

class PromptManager:
    def __init__(self):
        self.llm = OpenAI(openai_api_key=OPENAI_API_KEY, temperature=0.7)
        self.templates = {
            "code_review": """
            You are an expert code reviewer. Review the following {language} code and provide feedback:
            
            Code:
            {code}
            
            Please provide:
            1. Overall assessment
            2. Specific issues or improvements
            3. Best practices recommendations
            
            Review:
            """,
            
            "email_writer": """
            Write a professional email with the following details:
            
            To: {recipient}
            Subject: {subject}
            Tone: {tone}
            Key Points: {key_points}
            
            Email:
            """,
            
            "story_generator": """
            Create a {genre} story with the following elements:
            
            Setting: {setting}
            Main Character: {character}
            Conflict: {conflict}
            Length: {length} words
            
            Story:
            """
        }
    
    def generate_content(self, template_name, **kwargs):
        """Generate content using specified template"""
        if template_name not in self.templates:
            return "Template not found"
        
        prompt = PromptTemplate(
            template=self.templates[template_name],
            input_variables=list(kwargs.keys())
        )
        
        chain = LLMChain(llm=self.llm, prompt=prompt)
        return chain.run(**kwargs)

# Usage
prompt_manager = PromptManager()

# Code review
code_review = prompt_manager.generate_content(
    "code_review",
    language="Python",
    code="""
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)
    """
)
print(code_review)

# Email writing
email = prompt_manager.generate_content(
    "email_writer",
    recipient="team@company.com",
    subject="Project Update",
    tone="professional",
    key_points="milestone completed, next steps, timeline"
)
print(email)
\`\`\`

## Building a Streamlit AI App

\`\`\`python
import streamlit as st
import openai
from config import OPENAI_API_KEY

# Configure OpenAI
openai.api_key = OPENAI_API_KEY

def main():
    st.title("🤖 AI Assistant")
    st.write("Chat with GPT-3.5 Turbo")
    
    # Initialize session state
    if "messages" not in st.session_state:
        st.session_state.messages = []
    
    # Display chat history
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.write(message["content"])
    
    # Chat input
    if prompt := st.chat_input("What would you like to know?"):
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.write(prompt)
        
        # Generate AI response
        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                try:
                    client = openai.OpenAI(api_key=OPENAI_API_KEY)
                    response = client.chat.completions.create(
                        model="gpt-3.5-turbo",
                        messages=[
                            {"role": m["role"], "content": m["content"]}
                            for m in st.session_state.messages
                        ],
                        max_tokens=500,
                        temperature=0.7
                    )
                    
                    assistant_response = response.choices[0].message.content
                    st.write(assistant_response)
                    
                    # Add assistant response to chat history
                    st.session_state.messages.append({
                        "role": "assistant", 
                        "content": assistant_response
                    })
                    
                except Exception as e:
                    st.error(f"Error: {str(e)}")
    
    # Sidebar with options
    with st.sidebar:
        st.header("Options")
        
        if st.button("Clear Chat"):
            st.session_state.messages = []
            st.rerun()
        
        st.header("Model Settings")
        temperature = st.slider("Temperature", 0.0, 1.0, 0.7, 0.1)
        max_tokens = st.slider("Max Tokens", 50, 1000, 500, 50)

if __name__ == "__main__":
    main()
\`\`\`

## Advanced Techniques

### RAG (Retrieval-Augmented Generation)

\`\`\`python
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

class RAGSystem:
    def __init__(self):
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
        self.knowledge_base = []
        self.embeddings = None
        self.index = None
    
    def add_documents(self, documents):
        """Add documents to knowledge base"""
        self.knowledge_base.extend(documents)
        
        # Generate embeddings
        embeddings = self.encoder.encode(documents)
        
        if self.embeddings is None:
            self.embeddings = embeddings
        else:
            self.embeddings = np.vstack([self.embeddings, embeddings])
        
        # Build FAISS index
        dimension = embeddings.shape[1]
        self.index = faiss.IndexFlatIP(dimension)
        self.index.add(self.embeddings.astype('float32'))
    
    def retrieve_relevant_docs(self, query, k=3):
        """Retrieve relevant documents for query"""
        if self.index is None:
            return []
        
        query_embedding = self.encoder.encode([query])
        scores, indices = self.index.search(query_embedding.astype('float32'), k)
        
        relevant_docs = [self.knowledge_base[i] for i in indices[0]]
        return relevant_docs
    
    def generate_answer(self, question):
        """Generate answer using RAG"""
        # Retrieve relevant documents
        relevant_docs = self.retrieve_relevant_docs(question)
        
        # Create context from relevant documents
        context = "\\n\\n".join(relevant_docs)
        
        # Generate answer using OpenAI
        prompt = f"""
        Context: {context}
        
        Question: {question}
        
        Answer based on the context provided:
        """
        
        client = openai.OpenAI(api_key=OPENAI_API_KEY)
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=300,
            temperature=0.3
        )
        
        return response.choices[0].message.content

# Usage
rag = RAGSystem()
rag.add_documents([
    "Python is a high-level programming language.",
    "Machine learning is a subset of artificial intelligence.",
    "Neural networks are inspired by biological neural networks."
])

answer = rag.generate_answer("What is Python?")
print(answer)
\`\`\`

### Fine-tuning with Hugging Face

\`\`\`python
from transformers import (
    AutoTokenizer, 
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer
)
import torch
from torch.utils.data import Dataset

class CustomDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_length=128):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_length = max_length
    
    def __len__(self):
        return len(self.texts)
    
    def __getitem__(self, idx):
        text = str(self.texts[idx])
        label = self.labels[idx]
        
        encoding = self.tokenizer(
            text,
            truncation=True,
            padding='max_length',
            max_length=self.max_length,
            return_tensors='pt'
        )
        
        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }

def fine_tune_model(train_texts, train_labels, val_texts, val_labels):
    """Fine-tune a pre-trained model"""
    model_name = "distilbert-base-uncased"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSequenceClassification.from_pretrained(
        model_name, 
        num_labels=len(set(train_labels))
    )
    
    # Create datasets
    train_dataset = CustomDataset(train_texts, train_labels, tokenizer)
    val_dataset = CustomDataset(val_texts, val_labels, tokenizer)
    
    # Training arguments
    training_args = TrainingArguments(
        output_dir='./results',
        num_train_epochs=3,
        per_device_train_batch_size=16,
        per_device_eval_batch_size=64,
        warmup_steps=500,
        weight_decay=0.01,
        logging_dir='./logs',
    )
    
    # Create trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        eval_dataset=val_dataset,
    )
    
    # Train the model
    trainer.train()
    
    return model, tokenizer

# Usage would require actual training data
# model, tokenizer = fine_tune_model(train_texts, train_labels, val_texts, val_labels)
\`\`\`

## Best Practices

### 1. API Key Management
\`\`\`python
import os
from dotenv import load_dotenv

# Always use environment variables
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# Never hardcode API keys in your code
# api_key = "sk-..." # DON'T DO THIS
\`\`\`

### 2. Error Handling
\`\`\`python
def safe_api_call(prompt, max_retries=3):
    """API call with error handling and retries"""
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=150
            )
            return response.choices[0].message.content
        
        except openai.RateLimitError:
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
                continue
            raise
        
        except openai.APIError as e:
            print(f"API Error: {e}")
            return None
        
        except Exception as e:
            print(f"Unexpected error: {e}")
            return None
\`\`\`

### 3. Cost Management
\`\`\`python
def estimate_cost(text, model="gpt-3.5-turbo"):
    """Estimate API cost before making request"""
    # Rough token estimation (1 token ≈ 4 characters)
    estimated_tokens = len(text) // 4
    
    # Pricing (as of 2024, check current rates)
    pricing = {
        "gpt-3.5-turbo": {"input": 0.0015, "output": 0.002},  # per 1K tokens
        "gpt-4": {"input": 0.03, "output": 0.06}
    }
    
    if model in pricing:
        input_cost = (estimated_tokens / 1000) * pricing[model]["input"]
        return \`Estimated cost: $\${input_cost.toFixed(4)}\`
    
    return "Unknown model pricing"
\`\`\`

## Conclusion

Python provides excellent tools for working with LLMs:

- **OpenAI API**: Easy integration with GPT models
- **Hugging Face**: Open-source models and tools
- **LangChain**: Framework for LLM applications
- **Streamlit**: Quick AI app development

Key considerations:
- **Security**: Protect API keys
- **Cost**: Monitor usage and optimize
- **Performance**: Cache results when possible
- **Ethics**: Use AI responsibly

Start with simple API calls and gradually build more sophisticated applications as you learn!`,
    author: 'Alex Kumar',
    publishedAt: '2024-01-14',
    readTime: 18,
    tags: ['Python', 'AI', 'LLM', 'Machine Learning'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '6',
    title: 'Python Modules and Packages: Complete Guide',
    excerpt: 'Master Python modules and packages. Learn about imports, creating custom modules, package structure, and distribution best practices.',
    content: `# Python Modules and Packages: Complete Guide

Modules and packages are fundamental concepts in Python that help organize code, promote reusability, and maintain clean project structure. This comprehensive guide covers everything from basic imports to creating distributable packages.

## What are Modules?

A module is a file containing Python code that can define functions, classes, and variables. Modules help organize related code and make it reusable across different programs.

### Creating Your First Module

\`\`\`python
# math_utils.py
"""
A simple math utilities module
"""

import math

def add(a, b):
    """Add two numbers"""
    return a + b

def multiply(a, b):
    """Multiply two numbers"""
    return a * b

def calculate_circle_area(radius):
    """Calculate the area of a circle"""
    return math.pi * radius ** 2

def factorial(n):
    """Calculate factorial of a number"""
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

# Module-level variables
PI = 3.14159
E = 2.71828

# Code that runs when module is imported
print(f"Math utils module loaded. PI = {PI}")
\`\`\`

### Using Modules

\`\`\`python
# main.py
import math_utils

# Using functions from the module
result = math_utils.add(5, 3)
print(f"5 + 3 = {result}")

area = math_utils.calculate_circle_area(5)
print(f"Circle area: {area}")

# Accessing module variables
print(f"PI from module: {math_utils.PI}")
\`\`\`

## Different Ways to Import

### 1. Import Entire Module

\`\`\`python
import math_utils

result = math_utils.add(10, 20)
\`\`\`

### 2. Import with Alias

\`\`\`python
import math_utils as mu

result = mu.add(10, 20)
\`\`\`

### 3. Import Specific Functions

\`\`\`python
from math_utils import add, multiply

result1 = add(10, 20)
result2 = multiply(5, 4)
\`\`\`

### 4. Import with Aliases

\`\`\`python
from math_utils import calculate_circle_area as circle_area

area = circle_area(10)
\`\`\`

### 5. Import All (Use with Caution)

\`\`\`python
from math_utils import *

# Now all functions are available directly
result = add(5, 3)
area = calculate_circle_area(7)
\`\`\`

## Module Search Path

Python searches for modules in specific locations:

\`\`\`python
import sys

# Display module search path
for path in sys.path:
    print(path)

# Add custom path
sys.path.append('/path/to/your/modules')
\`\`\`

## Creating Packages

A package is a directory containing multiple modules. It must include an \`__init__.py\` file.

### Basic Package Structure

\`\`\`
mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        submodule1.py
        submodule2.py
\`\`\`

### Example Package Implementation

\`\`\`python
# mypackage/__init__.py
"""
My Package - A collection of useful utilities
"""

__version__ = "1.0.0"
__author__ = "Your Name"

# Import key functions to package level
from .math_operations import add, subtract
from .string_operations import capitalize_words

# Package-level variable
PACKAGE_NAME = "mypackage"

print(f"Initializing {PACKAGE_NAME} v{__version__}")
\`\`\`

\`\`\`python
# mypackage/math_operations.py
"""Math operations module"""

def add(a, b):
    """Add two numbers"""
    return a + b

def subtract(a, b):
    """Subtract two numbers"""
    return a - b

def multiply(a, b):
    """Multiply two numbers"""
    return a * b

def divide(a, b):
    """Divide two numbers"""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

class Calculator:
    """A simple calculator class"""
    
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = add(a, b)
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def get_history(self):
        return self.history.copy()
\`\`\`

\`\`\`python
# mypackage/string_operations.py
"""String operations module"""

def capitalize_words(text):
    """Capitalize each word in a string"""
    return ' '.join(word.capitalize() for word in text.split())

def reverse_string(text):
    """Reverse a string"""
    return text[::-1]

def count_vowels(text):
    """Count vowels in a string"""
    vowels = 'aeiouAEIOU'
    return sum(1 for char in text if char in vowels)

def remove_duplicates(text):
    """Remove duplicate characters from string"""
    seen = set()
    result = []
    for char in text:
        if char not in seen:
            seen.add(char)
            result.append(char)
    return ''.join(result)
\`\`\`

\`\`\`python
# mypackage/subpackage/__init__.py
"""Subpackage for advanced operations"""

from .advanced_math import fibonacci, prime_numbers
\`\`\`

\`\`\`python
# mypackage/subpackage/advanced_math.py
"""Advanced mathematical operations"""

def fibonacci(n):
    """Generate Fibonacci sequence up to n terms"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib_sequence = [0, 1]
    for i in range(2, n):
        fib_sequence.append(fib_sequence[i-1] + fib_sequence[i-2])
    
    return fib_sequence

def is_prime(num):
    """Check if a number is prime"""
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def prime_numbers(limit):
    """Generate prime numbers up to limit"""
    return [num for num in range(2, limit + 1) if is_prime(num)]
\`\`\`

### Using the Package

\`\`\`python
# Using the package
import mypackage
from mypackage import Calculator
from mypackage.subpackage import fibonacci

# Using imported functions
result = mypackage.add(10, 5)
print(f"Addition result: {result}")

# Using classes
calc = Calculator()
calc_result = calc.add(15, 25)
print(f"Calculator result: {calc_result}")
print(f"History: {calc.get_history()}")

# Using subpackage
fib_sequence = fibonacci(10)
print(f"Fibonacci sequence: {fib_sequence}")
\`\`\`

## Advanced Module Concepts

### Module Attributes

\`\`\`python
# module_info.py
"""Module to demonstrate module attributes"""

def show_module_info():
    """Display information about this module"""
    print(f"Module name: {__name__}")
    print(f"Module file: {__file__}")
    print(f"Module doc: {__doc__}")

# Check if module is run directly
if __name__ == "__main__":
    print("This module is being run directly")
    show_module_info()
else:
    print("This module is being imported")
\`\`\`

### Dynamic Imports

\`\`\`python
import importlib

def dynamic_import(module_name):
    """Dynamically import a module"""
    try:
        module = importlib.import_module(module_name)
        return module
    except ImportError as e:
        print(f"Failed to import {module_name}: {e}")
        return None

# Usage
math_module = dynamic_import('math')
if math_module:
    print(f"Pi value: {math_module.pi}")

# Import from package
string_ops = dynamic_import('mypackage.string_operations')
if string_ops:
    result = string_ops.capitalize_words("hello world")
    print(f"Capitalized: {result}")
\`\`\`

### Reloading Modules

\`\`\`python
import importlib

# Reload a module (useful during development)
import mypackage.math_operations
importlib.reload(mypackage.math_operations)
\`\`\`

## Creating Installable Packages

### Setup.py Configuration

\`\`\`python
# setup.py
from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="mypackage",
    version="1.0.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A collection of useful utilities",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/mypackage",
    packages=find_packages(),
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
    ],
    python_requires=">=3.8",
    install_requires=[
        "requests>=2.25.0",
        "numpy>=1.20.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0",
            "black>=21.0",
            "flake8>=3.8",
        ],
    },
    entry_points={
        "console_scripts": [
            "mypackage-cli=mypackage.cli:main",
        ],
    },
)
\`\`\`

### pyproject.toml (Modern Alternative)

\`\`\`toml
# pyproject.toml
[build-system]
requires = ["setuptools>=45", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "mypackage"
version = "1.0.0"
description = "A collection of useful utilities"
readme = "README.md"
authors = [{name = "Your Name", email = "your.email@example.com"}]
license = {text = "MIT"}
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.8",
    "Programming Language :: Python :: 3.9",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]
requires-python = ">=3.8"
dependencies = [
    "requests>=2.25.0",
    "numpy>=1.20.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=6.0",
    "black>=21.0",
    "flake8>=3.8",
]

[project.scripts]
mypackage-cli = "mypackage.cli:main"

[project.urls]
Homepage = "https://github.com/yourusername/mypackage"
Repository = "https://github.com/yourusername/mypackage"
Documentation = "https://mypackage.readthedocs.io"
\`\`\`

### Building and Distributing

\`\`\`bash
# Install build tools
pip install build twine

# Build the package
python -m build

# Upload to PyPI (test first)
python -m twine upload --repository testpypi dist/*

# Upload to PyPI
python -m twine upload dist/*
\`\`\`

## Best Practices

### 1. Module Organization

\`\`\`python
# Good module structure
# utils/
#   __init__.py
#   file_operations.py
#   data_processing.py
#   validation.py

# utils/__init__.py
"""Utility functions package"""

from .file_operations import read_file, write_file
from .data_processing import clean_data, transform_data
from .validation import validate_email, validate_phone

__all__ = [
    'read_file', 'write_file',
    'clean_data', 'transform_data',
    'validate_email', 'validate_phone'
]
\`\`\`

### 2. Documentation

\`\`\`python
# well_documented_module.py
"""
A well-documented module example.

This module provides utilities for data processing and validation.
It includes functions for cleaning data, validating inputs, and
performing common transformations.

Example:
    >>> from well_documented_module import clean_text
    >>> clean_text("  Hello World!  ")
    'Hello World!'

Author: Your Name
Date: 2024-01-01
Version: 1.0.0
"""

def clean_text(text):
    """
    Clean and normalize text input.
    
    Args:
        text (str): The input text to clean
        
    Returns:
        str: Cleaned text with stripped whitespace and normalized case
        
    Raises:
        TypeError: If input is not a string
        
    Example:
        >>> clean_text("  HELLO world  ")
        'Hello world'
    """
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    
    return text.strip().capitalize()
\`\`\`

### 3. Error Handling

\`\`\`python
# robust_module.py
"""Module with proper error handling"""

import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ModuleError(Exception):
    """Custom exception for module errors"""
    pass

def safe_divide(a, b):
    """
    Safely divide two numbers with proper error handling.
    
    Args:
        a (float): Numerator
        b (float): Denominator
        
    Returns:
        float: Result of division
        
    Raises:
        ModuleError: If division by zero or invalid input
    """
    try:
        if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
            raise ModuleError("Both arguments must be numbers")
        
        if b == 0:
            raise ModuleError("Division by zero is not allowed")
        
        result = a / b
        logger.info(f"Division successful: {a} / {b} = {result}")
        return result
        
    except Exception as e:
        logger.error(f"Error in safe_divide: {e}")
        raise ModuleError(f"Division failed: {e}")
\`\`\`

### 4. Testing Modules

\`\`\`python
# test_math_utils.py
"""Tests for math_utils module"""

import unittest
import sys
import os

# Add parent directory to path for importing
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from math_utils import add, multiply, factorial

class TestMathUtils(unittest.TestCase):
    """Test cases for math utilities"""
    
    def test_add(self):
        """Test addition function"""
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
    
    def test_multiply(self):
        """Test multiplication function"""
        self.assertEqual(multiply(3, 4), 12)
        self.assertEqual(multiply(-2, 3), -6)
        self.assertEqual(multiply(0, 5), 0)
    
    def test_factorial(self):
        """Test factorial function"""
        self.assertEqual(factorial(0), 1)
        self.assertEqual(factorial(1), 1)
        self.assertEqual(factorial(5), 120)
        
        with self.assertRaises(ValueError):
            factorial(-1)

if __name__ == '__main__':
    unittest.main()
\`\`\`

## Common Patterns

### 1. Singleton Module

\`\`\`python
# config.py - Singleton-like module
"""Configuration module (singleton pattern)"""

_config = {}

def set_config(key, value):
    """Set configuration value"""
    _config[key] = value

def get_config(key, default=None):
    """Get configuration value"""
    return _config.get(key, default)

def get_all_config():
    """Get all configuration"""
    return _config.copy()

# Initialize with defaults
set_config('debug', False)
set_config('max_connections', 100)
\`\`\`

### 2. Factory Module

\`\`\`python
# database_factory.py
"""Database connection factory"""

import sqlite3
import mysql.connector
import psycopg2

class DatabaseFactory:
    """Factory for creating database connections"""
    
    @staticmethod
    def create_connection(db_type, **kwargs):
        """Create database connection based on type"""
        if db_type.lower() == 'sqlite':
            return sqlite3.connect(kwargs.get('database', ':memory:'))
        
        elif db_type.lower() == 'mysql':
            return mysql.connector.connect(
                host=kwargs.get('host', 'localhost'),
                user=kwargs.get('user'),
                password=kwargs.get('password'),
                database=kwargs.get('database')
            )
        
        elif db_type.lower() == 'postgresql':
            return psycopg2.connect(
                host=kwargs.get('host', 'localhost'),
                user=kwargs.get('user'),
                password=kwargs.get('password'),
                database=kwargs.get('database')
            )
        
        else:
            raise ValueError(f"Unsupported database type: {db_type}")

# Usage
# db = DatabaseFactory.create_connection('sqlite', database='test.db')
\`\`\`

### 3. Plugin System

\`\`\`python
# plugin_system.py
"""Simple plugin system"""

import importlib
import os

class PluginManager:
    """Manage and load plugins"""
    
    def __init__(self, plugin_dir='plugins'):
        self.plugin_dir = plugin_dir
        self.plugins = {}
    
    def load_plugins(self):
        """Load all plugins from plugin directory"""
        if not os.path.exists(self.plugin_dir):
            return
        
        for filename in os.listdir(self.plugin_dir):
            if filename.endswith('.py') and not filename.startswith('__'):
                plugin_name = filename[:-3]  # Remove .py extension
                try:
                    module = importlib.import_module(f"{self.plugin_dir}.{plugin_name}")
                    if hasattr(module, 'plugin_info'):
                        self.plugins[plugin_name] = module
                        print(f"Loaded plugin: {plugin_name}")
                except ImportError as e:
                    print(f"Failed to load plugin {plugin_name}: {e}")
    
    def get_plugin(self, name):
        """Get a specific plugin"""
        return self.plugins.get(name)
    
    def list_plugins(self):
        """List all loaded plugins"""
        return list(self.plugins.keys())

# Example plugin structure:
# plugins/
#   __init__.py
#   text_processor.py
#   data_validator.py
\`\`\`

## Conclusion

Python modules and packages are essential for:

- **Code Organization**: Keep related functionality together
- **Reusability**: Share code across projects
- **Maintainability**: Easier to update and debug
- **Collaboration**: Team members can work on different modules
- **Distribution**: Share your code with the community

Key takeaways:
- Start with simple modules and gradually create packages
- Use proper documentation and error handling
- Follow Python naming conventions
- Test your modules thoroughly
- Consider packaging for distribution

Master these concepts to write more organized, maintainable, and professional Python code!`,
    author: 'Lisa Zhang',
    publishedAt: '2024-01-12',
    readTime: 16,
    tags: ['Python', 'Modules', 'Packages', 'Code Organization'],
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '7',
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Discover the latest CSS features and techniques that will improve your web design workflow in 2024.',
    content: `# Modern CSS Techniques for 2024

CSS continues to evolve rapidly, bringing new features that make styling more powerful and intuitive. Let's explore the cutting-edge techniques you should know.

## Container Queries

Container queries allow you to style elements based on their container's size, not the viewport.

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to align with their parent grid.

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.child {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
\`\`\`

## New Color Functions

### oklch() Color Space

\`\`\`css
.element {
  background: oklch(70% 0.15 180deg);
  color: oklch(30% 0.1 200deg);
}
\`\`\`

### color-mix() Function

\`\`\`css
.mixed-color {
  background: color-mix(in srgb, blue 60%, red);
}
\`\`\`

## Advanced Selectors

### :has() Pseudo-class

\`\`\`css
/* Style form when it has invalid inputs */
form:has(input:invalid) {
  border: 2px solid red;
}

/* Style cards that contain images */
.card:has(img) {
  padding: 0;
}
\`\`\`

## Cascade Layers

Organize your CSS with explicit layering:

\`\`\`css
@layer reset, base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .btn { padding: 0.5rem 1rem; }
}
\`\`\`

## View Transitions API

Create smooth page transitions:

\`\`\`css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
\`\`\`

## Conclusion

These modern CSS techniques provide powerful tools for creating more maintainable and responsive designs. Start incorporating them into your projects to stay ahead of the curve.`,
    author: 'Jane Smith',
    publishedAt: '2024-01-10',
    readTime: 6,
    tags: ['CSS', 'Web Design', 'Frontend'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '8',
    title: 'Building Scalable Node.js Applications',
    excerpt: 'Learn architectural patterns and best practices for building large-scale Node.js applications that can handle millions of users.',
    content: `# Building Scalable Node.js Applications

Building applications that can scale to handle millions of users requires careful planning and the right architectural decisions. Let's explore proven patterns and practices.

## Architectural Patterns

### Microservices Architecture

Break your application into smaller, independent services:

\`\`\`javascript
// User Service
const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const user = await UserService.findById(req.params.id);
  res.json(user);
});

app.listen(3001);
\`\`\`

### Event-Driven Architecture

Use events to decouple services:

\`\`\`javascript
const EventEmitter = require('events');

class OrderService extends EventEmitter {
  async createOrder(orderData) {
    const order = await this.saveOrder(orderData);
    this.emit('orderCreated', order);
    return order;
  }
}

const orderService = new OrderService();

orderService.on('orderCreated', (order) => {
  // Send email notification
  emailService.sendOrderConfirmation(order);
  
  // Update inventory
  inventoryService.updateStock(order.items);
});
\`\`\`

## Performance Optimization

### Clustering

Utilize all CPU cores:

\`\`\`javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork();
  });
} else {
  require('./app');
}
\`\`\`

### Caching Strategies

Implement multi-level caching:

\`\`\`javascript
const Redis = require('redis');
const client = Redis.createClient();

async function getUser(id) {
  // Check cache first
  const cached = await client.get(\`user:\${id}\`);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Fetch from database
  const user = await User.findById(id);
  
  // Cache for 1 hour
  await client.setex(\`user:\${id}\`, 3600, JSON.stringify(user));
  
  return user;
}
\`\`\`

## Database Optimization

### Connection Pooling

\`\`\`javascript
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myapp',
  connectionLimit: 10,
  acquireTimeout: 60000,
  timeout: 60000
});
\`\`\`

### Read Replicas

\`\`\`javascript
const masterDb = mysql.createConnection(masterConfig);
const replicaDb = mysql.createConnection(replicaConfig);

function readQuery(sql, params) {
  return replicaDb.execute(sql, params);
}

function writeQuery(sql, params) {
  return masterDb.execute(sql, params);
}
\`\`\`

## Monitoring and Logging

### Structured Logging

\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Usage
logger.info('User logged in', { userId: 123, ip: '192.168.1.1' });
\`\`\`

## Security Best Practices

### Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

## Conclusion

Building scalable Node.js applications requires attention to architecture, performance, security, and monitoring. Start with these patterns and adapt them to your specific needs.`,
    author: 'Mike Johnson',
    publishedAt: '2024-01-05',
    readTime: 12,
    tags: ['Node.js', 'Backend', 'Architecture', 'Performance'],
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '9',
    title: 'Python Data Structures and Algorithms',
    excerpt: 'Master essential data structures and algorithms in Python. From arrays and linked lists to sorting and searching algorithms.',
    content: `# Python Data Structures and Algorithms

Understanding data structures and algorithms is crucial for writing efficient Python code and succeeding in technical interviews. This comprehensive guide covers the most important concepts with practical implementations.

## Why Data Structures and Algorithms Matter

- **Efficiency**: Choose the right tool for the job
- **Performance**: Optimize time and space complexity
- **Problem Solving**: Break down complex problems
- **Interviews**: Essential for technical assessments

## Time and Space Complexity

### Big O Notation

\`\`\`python
# O(1) - Constant Time
def get_first_element(arr):
    return arr[0] if arr else None

# O(n) - Linear Time
def find_element(arr, target):
    for element in arr:
        if element == target:
            return True
    return False

# O(n²) - Quadratic Time
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# O(log n) - Logarithmic Time
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

## Arrays and Lists

### Dynamic Array Implementation

\`\`\`python
class DynamicArray:
    """A resizable array implementation"""
    
    def __init__(self, capacity=1):
        self.capacity = capacity
        self.size = 0
        self.data = [None] * capacity
    
    def __len__(self):
        return self.size
    
    def __getitem__(self, index):
        if 0 <= index < self.size:
            return self.data[index]
        raise IndexError("Index out of range")
    
    def __setitem__(self, index, value):
        if 0 <= index < self.size:
            self.data[index] = value
        else:
            raise IndexError("Index out of range")
    
    def append(self, value):
        """Add element to end of array"""
        if self.size >= self.capacity:
            self._resize()
        self.data[self.size] = value
        self.size += 1
    
    def insert(self, index, value):
        """Insert element at specific index"""
        if index < 0 or index > self.size:
            raise IndexError("Index out of range")
        
        if self.size >= self.capacity:
            self._resize()
        
        # Shift elements to the right
        for i in range(self.size, index, -1):
            self.data[i] = self.data[i - 1]
        
        self.data[index] = value
        self.size += 1
    
    def remove(self, index):
        """Remove element at specific index"""
        if index < 0 or index >= self.size:
            raise IndexError("Index out of range")
        
        # Shift elements to the left
        for i in range(index, self.size - 1):
            self.data[i] = self.data[i + 1]
        
        self.size -= 1
        return self.data[index]
    
    def _resize(self):
        """Double the capacity when needed"""
        self.capacity *= 2
        new_data = [None] * self.capacity
        for i in range(self.size):
            new_data[i] = self.data[i]
        self.data = new_data
    
    def __str__(self):
        return str([self.data[i] for i in range(self.size)])

# Usage
arr = DynamicArray()
arr.append(1)
arr.append(2)
arr.append(3)
print(arr)  # [1, 2, 3]
\`\`\`

## Linked Lists

### Singly Linked List

\`\`\`python
class ListNode:
    """Node for singly linked list"""
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    """Singly linked list implementation"""
    
    def __init__(self):
        self.head = None
        self.size = 0
    
    def append(self, val):
        """Add element to end of list"""
        new_node = ListNode(val)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
    
    def prepend(self, val):
        """Add element to beginning of list"""
        new_node = ListNode(val)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def delete(self, val):
        """Delete first occurrence of value"""
        if not self.head:
            return False
        
        if self.head.val == val:
            self.head = self.head.next
            self.size -= 1
            return True
        
        current = self.head
        while current.next:
            if current.next.val == val:
                current.next = current.next.next
                self.size -= 1
                return True
            current = current.next
        
        return False
    
    def find(self, val):
        """Find element in list"""
        current = self.head
        index = 0
        while current:
            if current.val == val:
                return index
            current = current.next
            index += 1
        return -1
    
    def reverse(self):
        """Reverse the linked list"""
        prev = None
        current = self.head
        
        while current:
            next_temp = current.next
            current.next = prev
            prev = current
            current = next_temp
        
        self.head = prev
    
    def __len__(self):
        return self.size
    
    def __str__(self):
        result = []
        current = self.head
        while current:
            result.append(str(current.val))
            current = current.next
        return " -> ".join(result)

# Usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
print(ll)  # 1 -> 2 -> 3
ll.reverse()
print(ll)  # 3 -> 2 -> 1
\`\`\`

## Stacks and Queues

### Stack Implementation

\`\`\`python
class Stack:
    """Stack implementation using list"""
    
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Add item to top of stack"""
        self.items.append(item)
    
    def pop(self):
        """Remove and return top item"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        """Return top item without removing"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]
    
    def is_empty(self):
        """Check if stack is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Return size of stack"""
        return len(self.items)
    
    def __str__(self):
        return str(self.items)

# Stack applications
def is_balanced_parentheses(s):
    """Check if parentheses are balanced"""
    stack = Stack()
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in s:
        if char in pairs:
            stack.push(char)
        elif char in pairs.values():
            if stack.is_empty():
                return False
            if pairs[stack.pop()] != char:
                return False
    
    return stack.is_empty()

# Usage
print(is_balanced_parentheses("()[]{}"))  # True
print(is_balanced_parentheses("([)]"))    # False
\`\`\`

### Queue Implementation

\`\`\`python
from collections import deque

class Queue:
    """Queue implementation using deque"""
    
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        """Add item to rear of queue"""
        self.items.append(item)
    
    def dequeue(self):
        """Remove and return front item"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items.popleft()
    
    def front(self):
        """Return front item without removing"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        """Check if queue is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Return size of queue"""
        return len(self.items)
    
    def __str__(self):
        return str(list(self.items))

# Queue application: BFS
def bfs_shortest_path(graph, start, end):
    """Find shortest path using BFS"""
    if start == end:
        return [start]
    
    queue = Queue()
    queue.enqueue([start])
    visited = {start}
    
    while not queue.is_empty():
        path = queue.dequeue()
        node = path[-1]
        
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                new_path = path + [neighbor]
                if neighbor == end:
                    return new_path
                queue.enqueue(new_path)
                visited.add(neighbor)
    
    return None

# Usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
print(bfs_shortest_path(graph, 'A', 'F'))  # ['A', 'C', 'F']
\`\`\`

## Trees

### Binary Tree Implementation

\`\`\`python
class TreeNode:
    """Node for binary tree"""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BinaryTree:
    """Binary tree implementation"""
    
    def __init__(self, root=None):
        self.root = root
    
    def inorder_traversal(self, node=None):
        """Inorder traversal: left, root, right"""
        if node is None:
            node = self.root
        
        result = []
        if node:
            result.extend(self.inorder_traversal(node.left))
            result.append(node.val)
            result.extend(self.inorder_traversal(node.right))
        return result
    
    def preorder_traversal(self, node=None):
        """Preorder traversal: root, left, right"""
        if node is None:
            node = self.root
        
        result = []
        if node:
            result.append(node.val)
            result.extend(self.preorder_traversal(node.left))
            result.extend(self.preorder_traversal(node.right))
        return result
    
    def postorder_traversal(self, node=None):
        """Postorder traversal: left, right, root"""
        if node is None:
            node = self.root
        
        result = []
        if node:
            result.extend(self.postorder_traversal(node.left))
            result.extend(self.postorder_traversal(node.right))
            result.append(node.val)
        return result
    
    def level_order_traversal(self):
        """Level order traversal (BFS)"""
        if not self.root:
            return []
        
        result = []
        queue = Queue()
        queue.enqueue(self.root)
        
        while not queue.is_empty():
            node = queue.dequeue()
            result.append(node.val)
            
            if node.left:
                queue.enqueue(node.left)
            if node.right:
                queue.enqueue(node.right)
        
        return result
    
    def height(self, node=None):
        """Calculate height of tree"""
        if node is None:
            node = self.root
        
        if not node:
            return -1
        
        left_height = self.height(node.left)
        right_height = self.height(node.right)
        
        return 1 + max(left_height, right_height)

# Usage
#       1
#      / \\
#     2   3
#    / \\
#   4   5

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

tree = BinaryTree(root)
print("Inorder:", tree.inorder_traversal())    # [4, 2, 5, 1, 3]
print("Preorder:", tree.preorder_traversal())  # [1, 2, 4, 5, 3]
print("Postorder:", tree.postorder_traversal()) # [4, 5, 2, 3, 1]
print("Level order:", tree.level_order_traversal()) # [1, 2, 3, 4, 5]
print("Height:", tree.height())  # 2
\`\`\`

### Binary Search Tree

\`\`\`python
class BST:
    """Binary Search Tree implementation"""
    
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        """Insert value into BST"""
        self.root = self._insert_recursive(self.root, val)
    
    def _insert_recursive(self, node, val):
        """Helper method for insertion"""
        if not node:
            return TreeNode(val)
        
        if val < node.val:
            node.left = self._insert_recursive(node.left, val)
        elif val > node.val:
            node.right = self._insert_recursive(node.right, val)
        
        return node
    
    def search(self, val):
        """Search for value in BST"""
        return self._search_recursive(self.root, val)
    
    def _search_recursive(self, node, val):
        """Helper method for search"""
        if not node or node.val == val:
            return node
        
        if val < node.val:
            return self._search_recursive(node.left, val)
        else:
            return self._search_recursive(node.right, val)
    
    def delete(self, val):
        """Delete value from BST"""
        self.root = self._delete_recursive(self.root, val)
    
    def _delete_recursive(self, node, val):
        """Helper method for deletion"""
        if not node:
            return node
        
        if val < node.val:
            node.left = self._delete_recursive(node.left, val)
        elif val > node.val:
            node.right = self._delete_recursive(node.right, val)
        else:
            # Node to be deleted found
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            
            # Node has two children
            min_node = self._find_min(node.right)
            node.val = min_node.val
            node.right = self._delete_recursive(node.right, min_node.val)
        
        return node
    
    def _find_min(self, node):
        """Find minimum value node"""
        while node.left:
            node = node.left
        return node
    
    def inorder(self):
        """Return inorder traversal"""
        result = []
        self._inorder_recursive(self.root, result)
        return result
    
    def _inorder_recursive(self, node, result):
        """Helper for inorder traversal"""
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.val)
            self._inorder_recursive(node.right, result)

# Usage
bst = BST()
values = [50, 30, 70, 20, 40, 60, 80]
for val in values:
    bst.insert(val)

print("Inorder traversal:", bst.inorder())  # [20, 30, 40, 50, 60, 70, 80]
print("Search 40:", bst.search(40) is not None)  # True
bst.delete(30)
print("After deleting 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]
\`\`\`

## Sorting Algorithms

### Quick Sort

\`\`\`python
def quicksort(arr):
    """Quick sort implementation"""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# In-place version
def quicksort_inplace(arr, low=0, high=None):
    """In-place quick sort"""
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pivot_index = partition(arr, low, high)
        quicksort_inplace(arr, low, pivot_index - 1)
        quicksort_inplace(arr, pivot_index + 1, high)

def partition(arr, low, high):
    """Partition function for quicksort"""
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = quicksort(arr)
print("Sorted array:", sorted_arr)
\`\`\`

### Merge Sort

\`\`\`python
def mergesort(arr):
    """Merge sort implementation"""
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = mergesort(arr[:mid])
    right = mergesort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    """Merge two sorted arrays"""
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = mergesort(arr)
print("Sorted array:", sorted_arr)
\`\`\`

## Hash Tables

### Hash Table Implementation

\`\`\`python
class HashTable:
    """Hash table with separate chaining"""
    
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        """Hash function"""
        return hash(key) % self.size
    
    def put(self, key, value):
        """Insert key-value pair"""
        index = self._hash(key)
        bucket = self.table[index]
        
        # Update existing key
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        
        # Add new key-value pair
        bucket.append((key, value))
    
    def get(self, key):
        """Get value by key"""
        index = self._hash(key)
        bucket = self.table[index]
        
        for k, v in bucket:
            if k == key:
                return v
        
        raise KeyError(key)
    
    def remove(self, key):
        """Remove key-value pair"""
        index = self._hash(key)
        bucket = self.table[index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                return
        
        raise KeyError(key)
    
    def __contains__(self, key):
        """Check if key exists"""
        try:
            self.get(key)
            return True
        except KeyError:
            return False
    
    def keys(self):
        """Return all keys"""
        keys = []
        for bucket in self.table:
            for k, v in bucket:
                keys.append(k)
        return keys
    
    def values(self):
        """Return all values"""
        values = []
        for bucket in self.table:
            for k, v in bucket:
                values.append(v)
        return values

# Usage
ht = HashTable()
ht.put("name", "Alice")
ht.put("age", 30)
ht.put("city", "New York")

print(ht.get("name"))  # Alice
print("age" in ht)     # True
print(ht.keys())       # ['name', 'age', 'city']
\`\`\`

## Graph Algorithms

### Graph Representation and Traversal

\`\`\`python
from collections import defaultdict, deque

class Graph:
    """Graph implementation using adjacency list"""
    
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v):
        """Add edge to graph"""
        self.graph[u].append(v)
    
    def dfs(self, start, visited=None):
        """Depth-First Search"""
        if visited is None:
            visited = set()
        
        visited.add(start)
        result = [start]
        
        for neighbor in self.graph[start]:
            if neighbor not in visited:
                result.extend(self.dfs(neighbor, visited))
        
        return result
    
    def bfs(self, start):
        """Breadth-First Search"""
        visited = set()
        queue = deque([start])
        result = []
        
        while queue:
            vertex = queue.popleft()
            if vertex not in visited:
                visited.add(vertex)
                result.append(vertex)
                
                for neighbor in self.graph[vertex]:
                    if neighbor not in visited:
                        queue.append(neighbor)
        
        return result
    
    def has_cycle(self):
        """Detect cycle in directed graph"""
        color = {}  # 0: white, 1: gray, 2: black
        
        def dfs_cycle(node):
            if node in color:
                return color[node] == 1  # Gray node means cycle
            
            color[node] = 1  # Mark as gray
            
            for neighbor in self.graph[node]:
                if dfs_cycle(neighbor):
                    return True
            
            color[node] = 2  # Mark as black
            return False
        
        for node in self.graph:
            if node not in color:
                if dfs_cycle(node):
                    return True
        
        return False

# Usage
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(2, 3)
g.add_edge(3, 3)

print("DFS from 2:", g.dfs(2))  # [2, 0, 1, 3]
print("BFS from 2:", g.bfs(2))  # [2, 0, 3, 1]
print("Has cycle:", g.has_cycle())  # True
\`\`\`

## Dynamic Programming

### Classic DP Problems

\`\`\`python
def fibonacci_dp(n):
    """Fibonacci with memoization"""
    memo = {}
    
    def fib(n):
        if n in memo:
            return memo[n]
        
        if n <= 1:
            return n
        
        memo[n] = fib(n - 1) + fib(n - 2)
        return memo[n]
    
    return fib(n)

def longest_common_subsequence(text1, text2):
    """Find length of longest common subsequence"""
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]

def knapsack_01(weights, values, capacity):
    """0/1 Knapsack problem"""
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                )
            else:
                dp[i][w] = dp[i - 1][w]
    
    return dp[n][capacity]

# Usage
print("Fibonacci(10):", fibonacci_dp(10))  # 55
print("LCS length:", longest_common_subsequence("ABCDGH", "AEDFHR"))  # 3

weights = [10, 20, 30]
values = [60, 100, 120]
capacity = 50
print("Knapsack max value:", knapsack_01(weights, values, capacity))  # 220
\`\`\`

## Best Practices

### 1. Choose the Right Data Structure

\`\`\`python
# Use appropriate data structure for the problem
# List: When you need ordered collection with duplicates
# Set: When you need unique elements and fast membership testing
# Dict: When you need key-value mapping
# Deque: When you need efficient insertion/deletion at both ends
\`\`\`

### 2. Analyze Time and Space Complexity

\`\`\`python
def analyze_algorithm(func):
    """Decorator to analyze algorithm performance"""
    import time
    import tracemalloc
    
    def wrapper(*args, **kwargs):
        # Start memory monitoring
        tracemalloc.start()
        
        # Time the function
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        
        # Get memory usage
        current, peak = tracemalloc.get_traced_memory()
        tracemalloc.stop()
        
        print(f"Function: {func.__name__}")
        print(f"Time: {end_time - start_time:.6f} seconds")
        print(f"Memory: {peak / 1024 / 1024:.2f} MB")
        print("-" * 40)
        
        return result
    
    return wrapper

@analyze_algorithm
def test_sorting(arr):
    return sorted(arr)

# Usage
test_sorting(list(range(10000, 0, -1)))
\`\`\`

### 3. Test Your Implementations

\`\`\`python
import unittest

class TestDataStructures(unittest.TestCase):
    
    def test_stack(self):
        stack = Stack()
        stack.push(1)
        stack.push(2)
        self.assertEqual(stack.pop(), 2)
        self.assertEqual(stack.peek(), 1)
        self.assertFalse(stack.is_empty())
    
    def test_binary_search(self):
        arr = [1, 3, 5, 7, 9, 11]
        self.assertEqual(binary_search(arr, 7), 3)
        self.assertEqual(binary_search(arr, 4), -1)
    
    def test_quicksort(self):
        arr = [64, 34, 25, 12, 22, 11, 90]
        expected = [11, 12, 22, 25, 34, 64, 90]
        self.assertEqual(quicksort(arr), expected)

if __name__ == '__main__':
    unittest.main()
\`\`\`

## Conclusion

Mastering data structures and algorithms in Python requires:

- **Understanding fundamentals**: Time/space complexity, basic operations
- **Practice implementation**: Build data structures from scratch
- **Solve problems**: Apply algorithms to real-world scenarios
- **Optimize solutions**: Consider trade-offs between time and space
- **Test thoroughly**: Ensure correctness and edge case handling

These concepts form the foundation for efficient programming and technical interviews. Start with the basics and gradually work your way up to more complex algorithms!`,
    author: 'David Park',
    publishedAt: '2024-01-08',
    readTime: 20,
    tags: ['Python', 'Algorithms', 'Data Structures', 'Computer Science'],
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '10',
    title: 'Python Web Development with FastAPI',
    excerpt: 'Build modern, fast web APIs with FastAPI. Learn about async programming, automatic documentation, and production deployment.',
    content: `# Python Web Development with FastAPI

FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints. It's designed to be easy to use, fast to code, and production-ready.

## Why FastAPI?

- **Fast**: Very high performance, on par with NodeJS and Go
- **Fast to code**: Increase development speed by 200-300%
- **Fewer bugs**: Reduce human-induced errors by 40%
- **Intuitive**: Great editor support with auto-completion
- **Easy**: Designed to be easy to use and learn
- **Short**: Minimize code duplication
- **Robust**: Get production-ready code with automatic interactive documentation

## Installation and Setup

\`\`\`bash
# Install FastAPI and ASGI server
pip install fastapi uvicorn[standard]

# Optional dependencies
pip install python-multipart  # For form data
pip install python-jose[cryptography]  # For JWT tokens
pip install passlib[bcrypt]  # For password hashing
pip install sqlalchemy  # For database ORM
pip install alembic  # For database migrations
\`\`\`

## Basic FastAPI Application

\`\`\`python
# main.py
from fastapi import FastAPI
from typing import Optional

app = FastAPI(
    title="My API",
    description="A simple API built with FastAPI",
    version="1.0.0"
)

@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    """Get item by ID with optional query parameter"""
    return {"item_id": item_id, "q": q}

@app.get("/users/{user_id}/items/{item_id}")
async def read_user_item(
    user_id: int, 
    item_id: str, 
    q: Optional[str] = None, 
    short: bool = False
):
    """Get user's item with multiple parameters"""
    item = {"item_id": item_id, "owner_id": user_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item

# Run with: uvicorn main:app --reload
\`\`\`

## Request and Response Models

### Pydantic Models

\`\`\`python
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum

class ItemStatus(str, Enum):
    """Item status enumeration"""
    active = "active"
    inactive = "inactive"
    pending = "pending"

class ItemBase(BaseModel):
    """Base item model"""
    name: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    price: float = Field(..., gt=0)
    status: ItemStatus = ItemStatus.active

class ItemCreate(ItemBase):
    """Model for creating items"""
    pass

class ItemUpdate(BaseModel):
    """Model for updating items"""
    name: Optional[str] = Field(None, min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    price: Optional[float] = Field(None, gt=0)
    status: Optional[ItemStatus] = None

class Item(ItemBase):
    """Complete item model with ID and timestamps"""
    id: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        orm_mode = True

class User(BaseModel):
    """User model"""
    id: int
    username: str
    email: EmailStr
    is_active: bool = True
    items: List[Item] = []
    
    class Config:
        orm_mode = True

# Using models in endpoints
@app.post("/items/", response_model=Item)
async def create_item(item: ItemCreate):
    """Create a new item"""
    # In real app, save to database
    return {
        "id": 1,
        "created_at": datetime.now(),
        "updated_at": datetime.now(),
        **item.dict()
    }

@app.put("/items/{item_id}", response_model=Item)
async def update_item(item_id: int, item: ItemUpdate):
    """Update an existing item"""
    # In real app, update in database
    return {
        "id": item_id,
        "name": item.name or "Default Name",
        "description": item.description,
        "price": item.price or 0.0,
        "status": item.status or ItemStatus.active,
        "created_at": datetime.now(),
        "updated_at": datetime.now()
    }
\`\`\`

## Database Integration with SQLAlchemy

### Database Setup

\`\`\`python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Database URL
SQLALCHEMY_DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "sqlite:///./test.db"
)

# Create engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in SQLALCHEMY_DATABASE_URL else {}
)

# Create session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
\`\`\`

### Database Models

\`\`\`python
# models.py
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, ForeignKey, Enum
from sqlalchemy.relationship import relationship
from sqlalchemy.sql import func
from database import Base
import enum

class ItemStatusEnum(enum.Enum):
    active = "active"
    inactive = "inactive"
    pending = "pending"

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    items = relationship("Item", back_populates="owner")

class Item(Base):
    __tablename__ = "items"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    status = Column(Enum(ItemStatusEnum), default=ItemStatusEnum.active)
    owner_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    owner = relationship("User", back_populates="items")
\`\`\`

### CRUD Operations

\`\`\`python
# crud.py
from sqlalchemy.orm import Session
from sqlalchemy import and_
from typing import List, Optional
import models
import schemas
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# User CRUD operations
def get_user(db: Session, user_id: int) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100) -> List[models.User]:
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Item CRUD operations
def get_items(
    db: Session, 
    skip: int = 0, 
    limit: int = 100,
    owner_id: Optional[int] = None
) -> List[models.Item]:
    query = db.query(models.Item)
    if owner_id:
        query = query.filter(models.Item.owner_id == owner_id)
    return query.offset(skip).limit(limit).all()

def get_item(db: Session, item_id: int) -> Optional[models.Item]:
    return db.query(models.Item).filter(models.Item.id == item_id).first()

def create_item(db: Session, item: schemas.ItemCreate, user_id: int) -> models.Item:
    db_item = models.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def update_item(
    db: Session, 
    item_id: int, 
    item_update: schemas.ItemUpdate
) -> Optional[models.Item]:
    db_item = get_item(db, item_id)
    if db_item:
        update_data = item_update.dict(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_item, field, value)
        db.commit()
        db.refresh(db_item)
    return db_item

def delete_item(db: Session, item_id: int) -> bool:
    db_item = get_item(db, item_id)
    if db_item:
        db.delete(db_item)
        db.commit()
        return True
    return False
\`\`\`

### API Endpoints with Database

\`\`\`python
# main.py (updated)
from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import crud, models, schemas
from database import SessionLocal, engine, get_db

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="FastAPI CRUD Example")

# User endpoints
@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=400, 
            detail="Email already registered"
        )
    return crud.create_user(db=db, user=user)

@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Item endpoints
@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int, 
    item: schemas.ItemCreate, 
    db: Session = Depends(get_db)
):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.create_item(db=db, item=item, user_id=user_id)

@app.get("/items/", response_model=List[schemas.Item])
def read_items(
    skip: int = 0, 
    limit: int = 100, 
    owner_id: int = None,
    db: Session = Depends(get_db)
):
    items = crud.get_items(db, skip=skip, limit=limit, owner_id=owner_id)
    return items

@app.get("/items/{item_id}", response_model=schemas.Item)
def read_item(item_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

@app.put("/items/{item_id}", response_model=schemas.Item)
def update_item(
    item_id: int, 
    item: schemas.ItemUpdate, 
    db: Session = Depends(get_db)
):
    db_item = crud.update_item(db, item_id=item_id, item_update=item)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

@app.delete("/items/{item_id}")
def delete_item(item_id: int, db: Session = Depends(get_db)):
    success = crud.delete_item(db, item_id=item_id)
    if not success:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"message": "Item deleted successfully"}
\`\`\`

## Authentication and Security

### JWT Authentication

\`\`\`python
# auth.py
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
import crud
from database import get_db

# Configuration
SECRET_KEY = "your-secret-key-here"  # Use environment variable in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def authenticate_user(db: Session, email: str, password: str):
    user = crud.get_user_by_email(db, email)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(
    token: str = Depends(oauth2_scheme), 
    db: Session = Depends(get_db)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = crud.get_user_by_email(db, email=email)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user = Depends(get_current_user)):
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
\`\`\`

### Protected Endpoints

\`\`\`python
from fastapi.security import OAuth2PasswordRequestForm
from auth import authenticate_user, create_access_token, get_current_active_user

@app.post("/token")
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me/", response_model=schemas.User)
async def read_users_me(current_user = Depends(get_current_active_user)):
    return current_user

@app.get("/users/me/items/", response_model=List[schemas.Item])
async def read_own_items(
    current_user = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    return crud.get_items(db, owner_id=current_user.id)

@app.post("/users/me/items/", response_model=schemas.Item)
async def create_item_for_current_user(
    item: schemas.ItemCreate,
    current_user = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    return crud.create_item(db=db, item=item, user_id=current_user.id)
\`\`\`

## Async Programming

### Async Database Operations

\`\`\`python
# async_database.py
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import select
import asyncio

# Async database setup
ASYNC_DATABASE_URL = "sqlite+aiosqlite:///./test.db"

async_engine = create_async_engine(ASYNC_DATABASE_URL)
AsyncSessionLocal = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False
)

async def get_async_db():
    async with AsyncSessionLocal() as session:
        yield session

# Async CRUD operations
async def get_user_async(db: AsyncSession, user_id: int):
    result = await db.execute(select(models.User).where(models.User.id == user_id))
    return result.scalar_one_or_none()

async def get_users_async(db: AsyncSession, skip: int = 0, limit: int = 100):
    result = await db.execute(select(models.User).offset(skip).limit(limit))
    return result.scalars().all()

# Async endpoints
@app.get("/async/users/{user_id}")
async def read_user_async(
    user_id: int, 
    db: AsyncSession = Depends(get_async_db)
):
    user = await get_user_async(db, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
\`\`\`

### Background Tasks

\`\`\`python
from fastapi import BackgroundTasks
import smtplib
from email.mime.text import MIMEText

def send_email(email: str, subject: str, body: str):
    """Send email in background"""
    # Email sending logic here
    print(f"Sending email to {email}: {subject}")
    # Simulate email sending delay
    import time
    time.sleep(2)
    print(f"Email sent to {email}")

@app.post("/send-notification/")
async def send_notification(
    email: str, 
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(
        send_email, 
        email, 
        "Welcome!", 
        "Thank you for signing up!"
    )
    return {"message": "Notification sent in the background"}
\`\`\`

## Testing

### Test Setup

\`\`\`python
# test_main.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database import Base, get_db
from main import app

# Test database
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as c:
        yield c
    Base.metadata.drop_all(bind=engine)

def test_create_user(client):
    response = client.post(
        "/users/",
        json={
            "username": "testuser",
            "email": "test@example.com",
            "password": "testpassword"
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == "test@example.com"
    assert "id" in data

def test_read_user(client):
    # Create user first
    response = client.post(
        "/users/",
        json={
            "username": "testuser",
            "email": "test@example.com",
            "password": "testpassword"
        }
    )
    user_id = response.json()["id"]
    
    # Read user
    response = client.get(f"/users/{user_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == "test@example.com"

def test_authentication(client):
    # Create user
    client.post(
        "/users/",
        json={
            "username": "testuser",
            "email": "test@example.com",
            "password": "testpassword"
        }
    )
    
    # Login
    response = client.post(
        "/token",
        data={"username": "test@example.com", "password": "testpassword"}
    )
    assert response.status_code == 200
    token = response.json()["access_token"]
    
    # Access protected endpoint
    response = client.get(
        "/users/me/",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 200
    assert response.json()["email"] == "test@example.com"
\`\`\`

## Production Deployment

### Docker Configuration

\`\`\`dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/dbname
    depends_on:
      - db
    volumes:
      - .:/app
    command: uvicorn main:app --host 0.0.0.0 --port 8000 --reload

  db:
    image: postgres:13
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: dbname
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
\`\`\`

### Environment Configuration

\`\`\`python
# config.py
from pydantic import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite:///./app.db"
    secret_key: str = "your-secret-key"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()
\`\`\`

## Best Practices

### 1. Project Structure

\`\`\`
project/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── config.py
│   ├── database.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── crud/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py
│   │   └── endpoints/
│   │       ├── __init__.py
│   │       └── users.py
│   └── core/
│       ├── __init__.py
│       ├── security.py
│       └── config.py
├── tests/
├── requirements.txt
├── Dockerfile
└── docker-compose.yml
\`\`\`

### 2. Error Handling

\`\`\`python
from fastapi import HTTPException
from fastapi.responses import JSONResponse

class CustomException(Exception):
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code

@app.exception_handler(CustomException)
async def custom_exception_handler(request, exc: CustomException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.message}
    )

@app.exception_handler(ValueError)
async def value_error_handler(request, exc: ValueError):
    return JSONResponse(
        status_code=400,
        content={"message": "Invalid input data"}
    )
\`\`\`

### 3. Logging

\`\`\`python
import logging
from fastapi import Request
import time

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    
    logger.info(
        f"{request.method} {request.url} - "
        f"Status: {response.status_code} - "
        f"Time: {process_time:.4f}s"
    )
    
    return response
\`\`\`

## Conclusion

FastAPI provides a modern, efficient way to build APIs with Python:

- **Type hints**: Automatic validation and documentation
- **Async support**: High performance with async/await
- **Automatic docs**: Interactive API documentation
- **Security**: Built-in authentication and authorization
- **Testing**: Easy to test with TestClient
- **Production ready**: Suitable for large-scale applications

Start with simple endpoints and gradually add features like authentication, database integration, and async operations as your application grows!`,
    author: 'Carlos Rodriguez',
    publishedAt: '2024-01-06',
    readTime: 22,
    tags: ['Python', 'FastAPI', 'Web Development', 'API'],
    imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export const getRelatedPosts = (currentPostId: string, currentTags: string[], limit = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      const aScore = a.tags.filter(tag => currentTags.includes(tag)).length;
      const bScore = b.tags.filter(tag => currentTags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
};