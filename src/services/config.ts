import { Injectable } from "@angular/core";
import * as SecureLS from 'secure-ls';

@Injectable()
export class Config {
    private storage;
    private prefix = 'ais'
    constructor() {
        this.storage = new SecureLS({
            encodingType: 'aes'
        });
    }

    set(key: string, value: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.storage.set(this.key(key), value)
            let stored = this.storage.get(this.key(key))
            if (stored) {
                resolve(stored)
            } else {
                resolve(undefined)
            }
        })
    }

    get(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let stored = this.storage.get(this.key(key))
            if (stored) {
                resolve(stored)
            } else {
                resolve(undefined)
            }
        })
    }

    remove(key: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.storage.remove(this.key(key))
            resolve()
        })
    }

    key(key) {
        return this.prefix + '_' + key
    }
}