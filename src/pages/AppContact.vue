<template>
    <div class="py-3 border-t-[1px]">

        <form class="px-4 my-10  max-w-3xl mx-auto space-y-6">
            <div>
                <label for="name">Name</label>
                <input class="border border-gray-300 block py-2 px-4 w-full rounded" type="text" name="name"
                    id="name" />
            </div>

            <div>
                <label for="mail">Email</label>
                <input class="border border-gray-300 block py-2 px-4 w-full rounded" type="email" name="mail" id="mail">
            </div>

            <div>
                <label for="message">Message</label>
                <textarea class="border border-gray-300 block py-2 px-4 w-full rounded" name="message" id="message"
                    cols="30" rows="10"></textarea>
            </div>

            <button class="rounded-full py-2 px-3 text-xs font-bold bg-gray-200 cursor-pointer">Submit</button>


        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>