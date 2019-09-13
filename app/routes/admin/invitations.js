import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('invitation');
    },

    actions: {
        deleteInvitation(invite) {
            let confirmation = confirm('Are you sure?')

            if (confirmation) {
                invite.destroyRecord();
            }
        }
    }
})
