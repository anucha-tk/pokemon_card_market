<script setup lang="ts">
  import { POKE_API } from '~/constants/api_constant';
  import { CircleX } from 'lucide-vue-next';
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '@/components/ui/tooltip';

  const pokemonSets = usePokemonSets();
  const pokemonRarity = usePokemonRarity();
  const pokemonTypes = usePokemonType();

  const pokemonSetOptions = useState<{ label: string; value: string }[]>('pokemonSets', () => []);
  const pokemonRaritiesOptions = useState<{ label: string; value: string }[]>(
    'pokemonRarities',
    () => []
  );
  const pokemonTypesOptions = useState<{ label: string; value: string }[]>(
    'pokemonTypes',
    () => []
  );

  const selectedSet = ref('');
  const selectedRarity = ref('');
  const selectedType = ref('');

  const setRes = await useAsyncData<PokemonApiResponse>('pokemonSets', () =>
    $fetch(POKE_API.setNames)
  );
  pokemonSetOptions.value =
    setRes.data?.value?.data?.map((e) => ({ label: e.name || '', value: e.id || '' })) || [];
  pokemonSets.updateSets(setRes.data?.value?.data?.map((e) => e.name || '').sort() || []);

  const raritiesRes = await useAsyncData<{ data: string[] }>('pokemonRarities', () =>
    $fetch(POKE_API.rarities)
  );
  pokemonRaritiesOptions.value =
    raritiesRes.data.value?.data.map((e) => ({ label: e, value: e })) || [];
  pokemonRarity.updateRarities(raritiesRes.data.value?.data.sort() || []);

  const typeRes = await useAsyncData<{ data: string[] }>('pokemonTypes', () =>
    $fetch(POKE_API.types)
  );
  pokemonTypesOptions.value = typeRes.data.value?.data.map((e) => ({ label: e, value: e })) || [];
  pokemonTypes.updateTypes(typeRes.data.value?.data.sort() || []);

  watch(
    () => selectedSet.value,
    (newValue) => {
      pokemonSets.updateSet(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedRarity.value,
    (newValue) => {
      pokemonRarity.updateRarity(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedType.value,
    (newValue) => {
      pokemonTypes.updateType(newValue);
    },
    { immediate: true }
  );
  const isFilter = computed(() => pokemonSets.set || pokemonTypes.type || pokemonRarity.rarity);

  const resetFilters = () => {
    pokemonSets.updateSet('');
    pokemonRarity.updateRarity('');
    pokemonTypes.updateType('');

    selectedSet.value = '';
    selectedRarity.value = '';
    selectedType.value = '';
  };
</script>

<template>
  <article
    id="menu"
    class="flex flex-col items-start justify-between space-y-6 md:flex-row md:items-center md:space-y-0"
  >
    <h1 class="text-lg font-semibold">Choose Card</h1>
    <div id="menu_filter" class="flex w-full items-center justify-between gap-2 md:w-fit">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div v-show="isFilter" id="clear_filter" class="h-10 w-10">
              <Button
                variant="outline"
                size="icon"
                class="h-full w-full bg-red-500 px-4"
                @click="resetFilters"
              >
                <CircleX style="width: 20px; height: 20px" class="text-white" />
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Clear all filters</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SelectDropdown v-model="selectedSet" :placeholder="'Set'" :options="pokemonSetOptions" />
      <SelectDropdown
        v-model="selectedRarity"
        :placeholder="'Rarity'"
        :options="pokemonRaritiesOptions"
      />
      <SelectDropdown v-model="selectedType" :placeholder="'Type'" :options="pokemonTypesOptions" />
    </div>
  </article>
</template>
