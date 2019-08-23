// JS implementation of a trie DS

const LETTERS = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const CHARCODE_TO_INDEX_DIFF = 97;

class TrieNode {
	constructor() {
		this.wordEnd = false;
		this.children = [];
	}
}

class Trie {
	constructor() {
		this.root = {
			children: [],
		}
	}

	insert(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i += 1) {
			const idx = word[i].charCodeAt(0) - CHARCODE_TO_INDEX_DIFF;

			if (!node.children[idx]) {
				node.children[idx] = new TrieNode();
			}

			node = node.children[idx];
		}

		node.wordEnd = true;
	}

	search(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i += 1) {
			const idx = word[i].charCodeAt(0) - CHARCODE_TO_INDEX_DIFF;

			if (!node.children[idx]) return false;

			node = node.children[idx];
		}
		
		return node.wordEnd;
	}

	startsWith(word) {
		let node = this.root

		for (let i = 0; i < word.length; i += 1) {
			const idx = word[i].charCodeAt(0) - CHARCODE_TO_INDEX_DIFF;

			if (!node.children[idx]) return false;

			node = node.children[idx];
		}
		
		return !!node;
	}

	printWords() {
		this.printHelp(this.root, '');
	}

	printHelp(node, path) {
		if (node.wordEnd) {
			console.log(path);
		}

		for (let i = 0; i < node.children.length; i += 1) {
			if (node.children[i]) {
				this.printHelp(node.children[i], path + LETTERS[i]);
			}
		}
	}
}
