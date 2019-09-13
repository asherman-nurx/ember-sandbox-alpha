import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    headerText: 'Coming Soon',
    emailAddress: '',
    responseMessage: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {
        saveInvitation(){
            const email = this.emailAddress;

            const newInvitation = this.store.createRecord('invitation', { email });

            newInvitation.save().then(res => {
                this.set('responseMessage', `Thank you! We've just saved your email address: ${this.emailAddress}`);
                this.set('emailAddress', '');
            });
        }
    }
});
