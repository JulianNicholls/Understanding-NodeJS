# Understanding-NodeJS

Javascript from the Udemy
[Understanding NodeJS course](https://www.udemy.com/understand-nodejs/learn/)

**NB**: If you use my files unchanged
you will need to make some configuration changes. I have set up a number
of aliases in my `/etc/hosts` file, including node.local, i.e.

```
127.0.0.1 localhost     # This line will already be in there

127.0.0.1 node.local    # These are the lines that I added
127.0.0.1 pg.local
127.0.0.1 mongodb.local
```

Otherwise, you can replace the `'node.local'` in the `listen()` call in the
files with either `'localhost'` or `'127.0.0.1'`

Also, I have used PostgreSQL instead of MySQL in section 10.

In section 12, I have used the word task instead of todo everywhere,
e.g. filenames, class names, variable names much as I did in the
[Udemy React Course](https://www.udemy.com/the-complete-react-web-app-developer-course).
The files for that are [here](https://github.com/JulianNicholls/Complete-React-Web-App).

Feel free to contact me if you have any questions.
