<template>
    <header>
        <div class="flex justify-center">
            <img alt="Vue logo" class="mx-auto p-4" src="./assets/logo.svg" width="125" height="125" />
        </div>
        <div class="text-black justify-center text-center">
            <nav class="space-x-4 text-xl">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/helpView">Help</RouterLink>
                <RouterLink to="/blogView">blog</RouterLink>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    name: "AppHeader"
}
</script>
