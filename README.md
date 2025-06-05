# Express.js - Examples of Request Parameters & Sending Responses

## 📌 Ways of Giving Parameters in Express

### 1. Route Parameters (`req.params`)

```js
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

### 2. Query Parameters (`req.query`)

```js
app.get('/products', (req, res) => {
  const { category, price } = req.query;
  res.send(`Category: ${category}, Price: ${price}`);
});
```

### 3. Body Parameters (`req.body`) \[Used in POST, PUT, PATCH]

```js
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Username: ${username}`);
});
```

### 4. Headers (`req.headers`)

```js
app.get('/info', (req, res) => {
  const userAgent = req.headers['user-agent'];
  res.send(`User-Agent: ${userAgent}`);
});
```

---

## 📦 Ways of Sending Response in Express

### 1. `res.send()`

```js
res.send('Hello World');
res.send({ success: true });
res.send([1, 2, 3]);
```

### 2. `res.json()`

```js
res.json({ message: 'Data received' });
```

### 3. `res.status(code)`

```js
res.status(200).send('OK');
res.status(404).json({ error: 'Not Found' });
```

### 4. `res.sendStatus(code)`

```js
res.sendStatus(200);  // Sends status code and message
```

### 5. `res.redirect(url)`

```js
res.redirect('/login');
res.redirect('https://google.com');
```

### 6. `res.render(view, data)` (for templating engines)

```js
res.render('index', { title: 'Home Page' });
```

### 7. `res.download(path)`

```js
res.download('/path/to/file.pdf');
```

### 8. `res.sendFile(path)`

```js
res.sendFile('/path/to/image.jpg');
```

### 9. `res.end()`

```js
res.end();              // Ends response
res.end('Finished');    // With message
```

---

## ✅ Summary Table

| Method             | Use Case                              |
| ------------------ | ------------------------------------- |
| `res.send()`       | Send plain text, object, array, etc.  |
| `res.json()`       | Send JSON (preferred for APIs)        |
| `res.status()`     | Set status code (chain with `send()`) |
| `res.sendStatus()` | Set status code with default message  |
| `res.redirect()`   | Redirect to another URL               |
| `res.render()`     | Render a view using a template engine |
| `res.download()`   | Send file as download                 |
| `res.sendFile()`   | Send static file                      |
| `res.end()`        | End response (manual control)         |

---

Feel free to copy-paste or save this as `express-responses.md` for future reference!
