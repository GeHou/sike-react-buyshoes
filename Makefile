.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js,build/app.js'

.PHONY: js
js:
	webpack --watch js/app.jsx build/app.js --module-bind "jsx=babel" --progress
	# babel --watch js/app.jsx --out-file build/app.js

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: clean
clean:
	rm -r bundle