import { Component, Vue } from 'vue-property-decorator';

import { getCurrentUser } from '@/globals';

@Component({})
export class UserContext extends Vue {

    // username: string | null = null;

    // noinspection JSUnusedGlobalSymbols
    created() {
        this.isAuthenticated();
    }

    getUsername(): string {
        let currentUser = getCurrentUser();

        return (currentUser && currentUser.email) || '';
    }

    isAuthenticated(): boolean {
        let currentUser = getCurrentUser();

        return Boolean(currentUser);
    }

}
