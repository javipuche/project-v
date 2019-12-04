# ES

::: theorem Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force.
:::

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

## b

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

### c

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

#### d

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

##### e

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

###### f

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

<Preview>
  <template slot="demo">
    <HelloWorld/>
  </template>

  <<< @/docs/examples/HelloWorld/HelloWorld.vue
</Preview>

```html
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis tempore quidem. Repellendus impedit a assumenda laudantium, sed quis temporibus ea! Minus sequi tempore voluptatum nam fuga ipsa, odio veritatis eveniet quisquam aliquam nostrum quae similique ratione culpa molestiae quidem reprehenderit provident praesentium esse. Obcaecati tenetur eum in, tempore, iusto mollitia nemo recusandae alias molestiae commodi hic aliquam suscipit est totam dignissimos cupiditate! Saepe, ex aut. Porro facilis minima minus et expedita veritatis quisquam neque vero nostrum enim officiis quibusdam placeat veniam suscipit assumenda eum pariatur id, aliquid alias eligendi sunt quis ullam aspernatur exercitationem? Dolorum esse assumenda earum nisi voluptatum? Inventore culpa ab corrupti nesciunt, laborum praesentium, fuga quos perspiciatis odit sit magni officiis aliquid dicta est. Id modi commodi quam voluptas obcaecati quidem! Excepturi sunt ad non architecto quia. Ducimus obcaecati cupiditate adipisci laborum rerum hic saepe quidem ab fugiat architecto sint enim aut nisi, sunt excepturi. Corporis sequi tenetur dolor inventore vitae qui et, beatae voluptates hic doloremque. Atque inventore suscipit non maxime? Dolorem quis ipsam voluptas recusandae ipsa, ab aspernatur nisi illum excepturi repudiandae. Mollitia provident quod unde nemo doloribus obcaecati totam sapiente debitis vel consectetur vero dolorem quam doloremque aut iusto laudantium sit architecto voluptas magnam, veritatis fugiat. Aliquid, deserunt libero odio repudiandae aut incidunt est architecto modi praesentium dignissimos voluptate. Blanditiis vel sunt sint officia quod esse nihil quam, possimus ratione sit adipisci aperiam voluptatibus, alias dignissimos atque ex rem fuga nisi laborum voluptatem nemo distinctio iusto odit enim? Id similique voluptas in vero, autem tempore nisi, quo sint, harum voluptates voluptatem ducimus soluta illo quam dolorem incidunt tenetur. Eveniet architecto quo obcaecati aperiam quidem ex molestiae, aut, a alias ut quaerat similique quia magnam odio reprehenderit vero! Totam minima debitis repellat asperiores suscipit doloribus impedit sapiente quisquam facilis, ea in fuga reprehenderit quis?</p>
```

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

1. Import a HTML file and watch it magically convert to Markdown
2. Drag and drop images (requires your Dropbox account be linked)

You can also:

- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

For production environments...

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
|------------------|-------------------------------------------|
| Dropbox          | [plugins/dropbox/README.md][PlDb]         |
| Github           | [plugins/github/README.md][PlGh]          |
| Google Drive     | [plugins/googledrive/README.md][PlGd]     |
| OneDrive         | [plugins/onedrive/README.md][PlOd]        |
| Medium           | [plugins/medium/README.md][PlMe]          |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

Second Tab:

(optional) Third:

For production release:

Generating pre-built zip archives for distribution:

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

Verify the deployment by navigating to your server address in your preferred browser.

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)

 - Write MORE Tests
 - Add Night Mode

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it> 
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
