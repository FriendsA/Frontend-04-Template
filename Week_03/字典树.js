let $ = Symbol('$');
class Trie {
    constructor() {
        this.root = Object.create(null);
    }
    insert(word) {
        let node = this.root;
        for (let i of word) {
            if (!node[i]) {
                node[i] = Object.create(null);
            }
            node = node[i];
        }
        if (!($ in node)) {
            node[$] = 0;
        }
        node[$]++;
    }
    most() {
        let max = 0;
        let maxWord = null;
        let visit = (node, word) => {
            if (node[$] && node[$] > max) {
                max = node[$];
                maxWord = word;
            }

            for (let p in node) {
                visit(node[p], word + p);
            }
        }
        visit(this.root, "");
        console.log(maxWord);
        console.log(max);
    }
    //查找单词
    search(word) {
        let node = this.root;
        let arr = word.split("");
        for (let i of arr) {
            if (!node[i]) {
                return false;
            }
            node = node[i];
        }
        if (node[$]) {
            return "完全找到";
        }
        console.log(node);
        return "包含找到";
    }
}

function randomWord(length) {
    let s = "";
    for (let i = 0; i < length; i++) {
        s += String.fromCharCode(Math.random() * 26 + 'a'.charCodeAt(0));
    }
    return s;
}

let trie = new Trie();

for (let i = 0; i < 100000; i++) {
    trie.insert(randomWord(4));
}