<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-1 bg-white p-4 md:p-6 flex flex-col justify-between">
      <!-- MAIN INFO -->
      <div class="flex-1">
        <p class="text-base md:text-lg font-medium text-primary">
          <a
            v-for="author in book.authors"
            :key="author.iri"
            :href="author.iri"
            class="mr-2 hover:text-primary-light transition-colors duration-150"
            target="_blank"
            rel="nofollow noopener"
          >
            {{ author.name }}
          </a>
        </p>
        <div href="#" class="block mt-2">
          <p class="text-lg md:text-xl font-medium text-black">
            <a
              :href="book.iri"
              target="_blank"
              rel="nofollow noopener"
              class="hover:text-secondary transition-colors duration-150"
            >
              {{ book.title }}
            </a>
          </p>
          <p class="mt-3 text-sm md:text-base text-black text-opacity-75">
            {{ book.description }}
          </p>
        </div>
      </div>
      <!-- ANOTHER META INFO -->
      <div class="mt-6 flex items-center">
        <ul
          class="w-full divide-y divide-secondary-light text-sm text-black text-opacity-50"
        >
          <li v-if="book.isbn" class="py-4 sm:px-0">ISBN: {{ book.isbn }}</li>
          <li v-if="book.genre" class="py-4 sm:px-0">
            Genre: {{ book.genre }}
          </li>
          <li v-if="book.pages" class="py-4 sm:px-0">
            Pages: {{ book.pages }}
          </li>
          <li v-if="book.publisher" class="py-4 sm:px-0">
            Publisher:
            <a
              :href="book.publisher"
              target="_blank"
              rel="nofollow noopener"
              class="text-black text-opacity-50 hover:text-opacity-100 transition-all duration-150"
              >{{ book.publisher }}</a
            >
          </li>

          <!-- EXTERNAL LINKS -->
          <li class="py-4 sm:px-0">
            <a
              :href="book.iri"
              target="_blank"
              rel="nofollow noopener"
              class="text-black text-opacity-50 hover:text-opacity-100 transition-all duration-150 inline-flex items-center flex-no-wrap"
            >
              Dbpedia <Icon name="external-link" class="w-5 h-6 ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { nodeType } from '~/lib/nodeType'
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    book() {
      if (this.node.type === nodeType.book) {
        return {
          iri: this.node.iri,
          title: this.node.title.value,
          description: this.node.description.value,
          authors: this.node.authors.value.split(',').map((a) => ({
            iri: a.split(' - ')[0],
            name: a.split(' - ')[1],
          })),
          isbn: this.node.isbn?.value,
          pages: this.node.pages?.value,
          publisher: this.node.publisher?.value,
          genre: this.node.genre?.value,
        }
      }

      return null
    },
  },
}
</script>
