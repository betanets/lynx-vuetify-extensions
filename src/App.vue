<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                temporary
                width="300px"
        >
            <v-list-item>
                <v-list-item-action class="mr-7">
                    <v-btn icon small @click.stop="drawer = !drawer">
                        <v-icon>{{ icons.mdiChevronLeft }}</v-icon>
                    </v-btn>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-subtitle>
                        Vuetify extensions
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <template v-for="item in menuItems">
                    <v-list-item
                            :key="item.title"
                            @click.prevent="changePage(item.href)"
                            v-bind:href="item.href"
                    >

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
        >
            <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                    color="accent"
            >
            </v-app-bar-nav-icon>
            <v-row class="ml-6">
                <a @click.prevent="changePage('/', false)"
                   v-bind:href="'/'"
                   :style="({ color: '#fff', textDecoration: 'none' })"
                   class="title">
                    Vuetify extensions
                </a>
            </v-row>
        </v-app-bar>

        <v-content>
            <router-view :key="timestampKey"></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import {mdiChevronLeft} from "@mdi/js";

    export default {
        name: "App",
        data() {
            return {
                icons: {
                    mdiChevronLeft,
                },
                drawer: null,
                timestampKey: null,

                menuItems: [
                    {title: "Alert", href: '/alert'},
                    {title: "Autocomplete", href: '/autocomplete'},
                    {title: "Button", href: '/button'},
                    {title: "Text field", href: '/text-field'},
                ]
            }
        },
        created() {
            if (this.$router.currentRoute.query.menu !== undefined) {
                this.drawer = true
            }
            this.timestampKey = new Date().getTime();
        },
        methods: {
            changePage: function (href, changeDrawer = true) {
                if (changeDrawer) {
                    this.drawer = !this.drawer;
                }
                if (this.$router.currentRoute.path === href) {
                    this.timestampKey = new Date().getTime();
                } else {
                    this.$router.push({path: href});
                }
            },
        }
    }
</script>
