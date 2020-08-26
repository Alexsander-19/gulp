install:
	npm install
sync:
	gulp sync
build:
	gulp build
create:
	mkdir -p src src/{scss,js,img,font}
	touch src/index.html src/scss/style.scss src/js/index.js
.PHONY: build
