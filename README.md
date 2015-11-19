# Understanding-NodeJS

Javascript from the Udemy Understanding NodeJS course at https://www.udemy.com/understand-nodejs/learn/

**NB**: If you use the section 7 webserver files unchanged, you will need to
do the same as I have done. I have set up a number of aliases in my
```/etc/hosts``` file, including node.local, i.e.

```
127.0.0.1 localhost     # This line will already be in there

127.0.0.1 node.local    # This is the line that I added
```

Otherwise, you can replace the ```'rails.local'``` in the ```listen()```
call in the files with either ```'localhost'``` or ```'127.0.0.1'```
