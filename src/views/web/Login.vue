<template>
  <div class="login">
    <section class="hero" id="home">
      <div class="content">
        <div class="narrow">
          <MainLogo />
          <h1 class="page-header">Login</h1>
          <form @submit.prevent="login" autocomplete="on">
            <input type="email" name="current_email" v-model="email" />
            <input type="password" name="current_password" v-model="password" />
            <input type="submit" value="Login" class="btn prime" />
          </form>
          <p v-if="feedback">{{ feedback }}</p>
          <router-link class="link" to="/create-account"
            >Create Account</router-link
          >
          <router-link class="link" to="/forgot-password"
            >Forgot Password?</router-link
          >
        </div>
      </div>
    </section>
    <MainFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MainLogo from "@/components/web/MainLogo.vue";
import MainFooter from "@/components/web/MainFooter.vue";
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  components: {
    MainLogo,
    MainFooter
  },
  methods: {
    login() {
      // console.log(this.email, this.password);
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // console.log(cred.user);
            this.$router.push({ name: "admin-dashboard" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "Please fill in both fields.";
      }
    }
  }
};
</script>

<style scoped>
section.hero .content {
  width: 90%;
}
input[type="text"],
input[type="email"],
input[type="number"],
select,
input[type="radio"],
input[type="date"],
input[type="password"] {
  padding: 5px 0;
  text-align: center;
}
</style>
