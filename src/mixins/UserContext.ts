import { Component, Vue } from 'vue-property-decorator';

import { getCurrentUser, store } from '@/globals';

@Component({})
export class UserContext extends Vue {

    username: string = '';

    // noinspection JSUnusedGlobalSymbols
    created() {
        let currentUser = getCurrentUser();
        this.username = (currentUser && currentUser.email) || '';

        store.subscribe((mutation) => {
            if (mutation.type === 'setUsername') {
                this.username = mutation.payload;
            }
        });
    }

    isAuthenticated(): boolean {
        return Boolean(this.username);
    }

}
