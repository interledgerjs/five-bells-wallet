# nlt-kit
LedgerLoops network node and GUI

Inspired on the now-deprecated [ilp-kit](https://github.com/interledger-deprecated/ilp-kit), this server runs a database and a GUI that allow you to keep trustline ledgers with other users of similar Network Ledger Technology servers.

```sh
sudo su - postgres
| createuser snap --pwprompt
| | Enter password for new role: snap
| | Enter it again: snap
| createdb -O snap snap
| exit
psql postgresql://snap:snap@localhost/snap < schema.db
npm install
DATABASE_URL=postgresql://snap:snap@localhost/snap npm start
```
