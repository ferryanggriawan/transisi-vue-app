<template>
  <v-app>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col cols="4" v-for="(user, idx) in users" :key="idx">
          <user-card
            :user="user"
            @edit="openEditDialog"
            @delete="openConfirmDialog"
            @view="openViewDialog"
          ></user-card>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      elevation="2"
      color="primary"
      bottom
      right
      fab
      large
      fixed
      @click="openAddDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <confirm-delete-dialog
      v-model="confirmDeleteDialog"
      @closeDialog="closeConfirmDialog"
      @confirm="deleteUser"
    ></confirm-delete-dialog>

    <user-view-dialog
      v-model="viewUserDialog"
      @closeDialog="closeViewDialog"
    ></user-view-dialog>

    <user-add-dialog
      v-model="addUserDialog"
      @closeDialog="closeAddDialog"
    ></user-add-dialog>

    <user-edit-dialog
      v-model="editUserDialog"
      @closeDialog="closeEditDialog"
      :user="selectedUser"
    ></user-edit-dialog>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import ConfirmDeleteDialog from "./components/ConfirmDeleteDialog"
import UserViewDialog from "./components/UserViewDialog"
import UserAddDialog from "./components/UserAddDialog"
import UserEditDialog from "./components/UserEditDialog"

export default {
  data() {
    return {
      confirmDeleteDialog: false,
      viewUserDialog: false,
      addUserDialog: false,
      editUserDialog: false,
      selectedUser: null,
    }
  },

  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
  },

  components: {
    ConfirmDeleteDialog,
    UserViewDialog,
    UserAddDialog,
    UserEditDialog,
  },

  mounted() {
    this.browseUser()
  },

  methods: {
    browseUser() {
      this.callAction(async () => {
        this.$store.dispatch("user/browse", { per_page: 15 })
      })
    },

    openConfirmDialog(user) {
      this.selectedUser = user
      this.confirmDeleteDialog = true
    },

    openViewDialog(user) {
      this.callAction(async () => {
        this.viewUserDialog = true
        await this.$store.dispatch("user/read", user.id)
      })
    },

    openAddDialog() {
      this.addUserDialog = true
    },

    openEditDialog(user) {
      this.callAction(async () => {
        await this.$store.dispatch("user/read", user.id)
        this.editUserDialog = true
      })
    },

    closeConfirmDialog() {
      this.confirmDeleteDialog = false
      this.selectedUser = null
    },

    closeViewDialog() {
      this.viewUserDialog = false
    },

    closeAddDialog() {
      this.addUserDialog = false
    },

    closeEditDialog() {
      this.editUserDialog = false
      this.selectedUser = null
    },

    deleteUser() {
      this.callAction(async () => {
        await this.$store.dispatch("user/delete", this.selectedUser.id)
        this.$store.commit("user/reset")
        this.closeConfirmDialog()
        this.browseUser()
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
