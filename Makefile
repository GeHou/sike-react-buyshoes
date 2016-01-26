.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js,build/app.js'

.PHONY: js
js:
	webpack --watch -d js/app.jsx build/app.js --module-bind "jsx=babel" --module-bind "js=babel" --progress
	# babel --watch js/app.jsx --out-file build/app.js

.PHONY: minjs
minjs:
	webpack --watch -p js/app.jsx bundle/app.js --module-bind "js=babel" --module-bind "jsx=babel" --progress

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: clean
clean:
	rm -r bundle