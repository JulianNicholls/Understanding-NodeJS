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

Feel free to contact me if you have any questions.
