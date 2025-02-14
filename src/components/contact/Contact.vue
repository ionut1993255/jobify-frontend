<template>
  <Navbar />

  <div class="contact-main-layout">
    <div class="contact-container">
      <div class="contact-info">
        <div class="title">Get In Touch</div>

        <div class="item">
          <q-icon name="location_on" />
          <span>55 Broadway, New York, NY 10006, USA</span>
        </div>

        <div class="item">
          <q-icon name="mail" />
          <span>jobify@email.com</span>
        </div>

        <div class="item">
          <q-icon name="phone" />
          <span>212-555-1234</span>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5079006679584!2d-74.01557852358663!3d40.70683433793112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb69fee82c3%3A0xec4f932333b0dde!2s55%20Broadway%2C%20New%20York%2C%20NY%2010006%2C%20Statele%20Unite%20ale%20Americii!5e0!3m2!1sro!2sro!4v1739443009158!5m2!1sro!2sro"
          loading="lazy"
        ></iframe>
      </div>

      <FormLayout customFormClass="contact-form">
        <Heading tag="h5" customHeadingClass="heading-form">Contact Us</Heading>

        <Form @submit.prevent="sendMessage" submitButtonLabel="Send">
          <FormGroup forId="first-name" labelText="First Name">
            <Input v-model="contactFormData.firstName" id="first-name" />
          </FormGroup>

          <FormGroup forId="last-name" labelText="Last Name">
            <Input v-model="contactFormData.lastName" id="last-name" />
          </FormGroup>

          <FormGroup forId="message" labelText="Your Message">
            <Textarea v-model="contactFormData.messageText" id="message" />
          </FormGroup>

          <FormGroup forId="email" labelText="Email">
            <Input type="email" v-model="contactFormData.email" id="email" />
          </FormGroup>

          <FormGroup forId="phone" labelText="Phone Number">
            <Input v-model="contactFormData.phoneNumber" id="phone" />
          </FormGroup>
        </Form>
      </FormLayout>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { ContactForm } from 'components/types/interfaces.ts'
import Navbar from 'components/ui/Navbar.vue'
import FormLayout from 'components/ui/FormLayout.vue'
import Heading from 'components/ui/Heading.vue'
import Form from 'components/ui/Form.vue'
import FormGroup from 'components/ui/FormGroup.vue'
import Input from 'components/ui/Input.vue'
import Textarea from 'components/ui/Textarea.vue'
import Footer from 'components/ui/Footer.vue'
import { showNotification } from 'src/utils/show-notification'

export default defineComponent({
  name: 'ContactPage',
  components: { Navbar, FormLayout, Heading, Form, FormGroup, Input, Textarea, Footer },
  data() {
    return {
      contactFormData: {} as ContactForm,
    }
  },
  methods: {
    sendMessage() {
      showNotification(
        'Your message has been sent successfully! We will get in touch with you as soon as possible.',
        'positive',
        'custom-notify',
      )

      this.contactFormData = {
        firstName: '',
        lastName: '',
        messageText: '',
        email: '',
        phoneNumber: '',
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.contact-main-layout {
  background-color: #9be3e2;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 0 120px;
  padding: 30px 0;
}

.contact-info {
  flex: 1;
  background: #f4f4f4;
  padding: 30px;
  text-align: left;
  border-radius: 10px;
  box-shadow:
    0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);

  .title {
    font-size: 28px;
    font-weight: bold;
    color: #26a69a;
    letter-spacing: 0.5px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #777;
    margin: 12px 0;
    letter-spacing: 0.3px;
  }

  :nth-child(4) {
    margin-bottom: 0;
  }

  .q-icon {
    color: orange;
  }

  iframe {
    width: 100%;
    height: 77%;
    margin-top: 12px;
    border-radius: 8px;
    border: none;
  }
}
</style>
