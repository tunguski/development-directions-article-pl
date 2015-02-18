# Automatyczne wieloaplikacyjne środowiska testowe

## Cel

* Stworzenie środowiska dla testów integracji systemów
* Uwzglednienie istnienia wielu różnych baz danych
* Uwzglednienie komunikacji ESB

## Podstawy

### Lxc - Linux Containers

Wirtualizacja poziomu systemu operacyjnego. Pozwala na uruchamianie wielu
izolowanych systemów linuksowych (kontenerów) na jednej maszynie.

Dwie podstawowe technologie skladowe to `cGroups` i `Namespaces`.

#### cGroups

Funkcja jądra linuksa umożliwiająca zarządzanie zasobami dostepnymi dla
zdefiniowanych grup procesów.

#### Namespaces

Funkcja jądra linuksa umożliwiająca separowanie _przestrzeni nazw_ poprzez
ograniczanie widoczności poszczególnych elementów przestrzeni zgodnie ze
zdefiniowanymi regulami.

W efekcie możliwe jest np.: uruchomienie dwóch kontenerów sluchających na
tym samym porcie. Kontenery nie widzą zasobów zdefiniowanych przez siebie
nazwajem.

### Aplikacje wsparcia wirtualizacji

[Docker + Fig + Flocker](https://clusterhq.com/blog/fig-flocker-multi-server-docker-apps/)

### Docker

Rozwiązanie bazuje na aplikacji `Docker`. Umożliwia ona latwe zarządzanie 
kontenerami linuksowymi, agregującymi pojedyncze systemy. W ten sposób imitowane
jest środowisko produkcyjne, z jego zależnościami pomidzedzy poszczególnymni 
systemami.

### Fig

`Fig` umożliwia definiowanie konfiguracji zlożonych z wielu kontenerów. Za 
pomocą jednej komendy `fig up` uruchomione zostaje cale środowisko powiązanych
kontenerów.

### Flocker

`Flocker` sluży do deployowania środowisk zdefiniowanych przez `Fig` na 
poszczególnych maszynach w środowisku. Jednym slowem poszczególne kontenery
zostają _rozrzucone_ pomiedzy serwerami (fizycznymi lub wirtualnymi) i tam
uruchomione.