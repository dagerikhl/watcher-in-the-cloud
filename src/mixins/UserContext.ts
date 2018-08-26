import { Component, Vue } from 'vue-property-decorator';

import { getCurrentUser } from '@/globals';

@Component({})
export class UserContext extends Vue {

    username: string | null = null;

    // noinspection JSUnusedGlobalSymbols
    created() {
        let currentUser = getCurrentUser();
        this.username = currentUser && currentUser.displayName;
    }

    isAuthenticated() {
        return Boolean(this.username);
    }

}
