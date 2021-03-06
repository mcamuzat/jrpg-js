class AnimatedBadGuy extends Phaser.GameObjects.PathFollower {
    constructor(scene, path, x, y, texture, frame, question, engine) {
        super(scene, path, x, y, texture, frame);
        let [type, input] = question;
        this.type = type;
        switch (this.type) {
            case 'kanji':
            let [xpcode, kanji, reading, furigana, sub, decl] = input;
                this.xpcode = xpcode;
                this.answer = reading;
                this.help = reading;
                this.question = kanji;
                this.furigana = furigana;
                // it's a verb, let decline it 
                if (decl) {
                    let ending = this.finalize(decl);
                    this.answer = this.answer.map((x) => x + ending);
                    this.help = this.help.map((x) => x + ending); 
                    this.question = this.question + ending; 
                    this.furigana.push([ending, null, false]);
                }
                break;
            case 'meaning':
                let [symbol, meanings] = input;
                this.xpcode = 'meaning'+ symbol;
                this.answer = meanings;
                this.help = meanings;
                this.question = symbol + '(meaning)';
                this.furigana = [];
                break;
            default:
                let [kana, readings] = input;
                this.xpcode = kana;
                this.answer = readings;
                this.help = readings;
                this.question = kana;
                this.furigana = [];
                
        }
        // have we already see the kanji
        this.fresh = !engine.beaten(this.xpcode);
        this.selected = false;
        this.words = [];
        if (this.furigana.length === 0) {
            let text = scene.add.text(x , y + 15, this.question, { color: 'white', fontSize: '45px'});
            if (this.type === 'kanji' && this.fresh) {
                let furigana = scene.add.text(x + 15, y , this.answer.join(", "), { color: "#ffffff", align: "center", fontSize: '10px'});
                this.words.push(furigana);
            }
            this.words.push(text);
        } else {
            for (let i=0, index = 0; i<this.furigana.length;i++) {
                let [base,furi,keep_furi] = this.furigana[i];
                let text = scene.add.text(x + index * 45 ,y + 15 , base, { color: "#ffffff", align: "center", fontSize: '45px'});
                if (furi && (keep_furi || this.fresh)) {
                    let furigana = scene.add.text(x + index * 45 + 15, y , furi, { color: "#ffffff", align: "center", fontSize: '10px'});
                    this.words.push(furigana);
                }
                index +=base.length;
                this.words.push(text);
            }
        }
    
        this.living = true;

        scene.add.existing(this);
    }
    destroy()
    {
        this.words.map(x => x.destroy());
        super.destroy();
    }
    finalize(decl)
    {
        let declTable = {
                'る': ['る', 'た', 'ない', 'ます'],
                '5':  ['る', 'った', 'らない', 'ります'],
                'う': ['う', 'った', 'わない', 'います'],
                'つ': ['つ', 'った', 'たない', 'ちます'],
                'く': ['く', 'いた', 'かない', 'きます'],
                'ぐ': ['ぐ', 'いだ', 'がない', 'ぎます'],
                'す': ['す', 'した', 'さない', 'します'],
                'む': ['む', 'んだ', 'まない', 'みます'],
                'ぬ': ['ぬ', 'んだ', 'なない', 'にます'],
                'ぶ': ['ぶ', 'んだ', 'ばない', 'びます'],
            }
        let choices = declTable[decl];
        let randomdecl = Math.floor((Math.random() * choices.length));
        return choices[randomdecl];
    }
}