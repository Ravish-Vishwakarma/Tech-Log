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
    id: '3',
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