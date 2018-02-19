
import DateSource from './components/modifiers/-date/adapter';
import ListSource from './components/modifiers/-list/adapter';
import DefaultSource from './components/modifiers/-default/adapter';

class token {
    modifier: ''
    configHash: {}
    config: null

    constructor({ configHash = {}, fullText = '' }) {
        this.configHash = configHash
        this.setFullText(fullText)
        if (this.modifier) {
            this.config = this.configHash[this.modifier]
        } else if (this.value && (this.value !== ' ')) {
            this.config = this.configHash['_default']
        }
        this.type = this.config ? this.config.type || 'space' : 'space'
        this.sectionTitle = this.config ? this.config.sectionTitle : ''
    }
    setFullText = (val) => {
        let configs = this.configHash
        if (configs) {
            let modifier;
            if (val.substr(0, 1) === '+') {
                modifier = '+';
            } else {
                for (let k in configs) {
                    if (val.substr(0, k.length) === k) {
                        modifier = k;
                        break;
                    }
                }
            }
            if (modifier) {
                let value = val.substr(modifier.length);
                this.modifier = modifier
                this.value = value
            } else if (val) {
                this.modifier = ''
                this.value = val
            }
        }
        return val;
    }
    fullText = () => {
        return this.modifier + this.value
    }

    adapter = (type) => {
        if (type === 'list' || type === 'modifier-list') {
            return ListSource;
        } else if (type === 'date') {
            return DateSource;
        } else {
            return DefaultSource;
        }
    }


    firstHint = () => {
        return this.hints()[0]
    }
    subHint = () => {
        let value = this.value
        let adapter = this.adapter(this.type)
        let firstHint = this.firstHint()
        let hint = typeof firstHint === 'string' ?
            firstHint : adapter.serialize(firstHint);
        let valueLength = value.length;

        if (valueLength && hint && hint.indexOf(value) === 0) {
            return hint.substr(valueLength);
        }
    }

    hints = () => {
        let value = this.value
        let adapter = this.adapter(this.type)
        return this.config ? adapter.getHints(value, this.config.content) || [] : [];
    }
    hint = () => {
        return this.value.length ?
        this.subHint() : this.config.defaultHint;
    }

    model = (value, isValueValid, adapter) => {
        return 'model'
    }

    isValueValid = (value, adapter) => {
        return adapter.validate(value, content);
    }

    autoComplete = () => {
        let hint = this.firstHint()
        let subHint = this.subHint()
        if (hint && subHint) {
            let hintValue = typeof hint === 'string' ? hint : hint.value;
            if (hint.modifier) {
                this.setFullText(hintValue)
            } else {
                this.value = hintValue
            }
            return true;
        }
        return false;
    }
}

export default token