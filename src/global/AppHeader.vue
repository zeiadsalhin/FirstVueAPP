<template>
    <header>
        <div class="flex justify-center">
            <img alt="Vue logo" class="mx-auto" src="./assets/logo.svg" width="125" height="125" />
        </div>
        <div class="text-black">
            <nav>
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
