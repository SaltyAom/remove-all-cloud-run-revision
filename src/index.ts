#!/usr/bin/env zx
import { $ } from 'zx'
import i from 'inquirer'

const { service } = await i.prompt({
    name: 'service',
    message: 'Service name'
})

const removeRevisionPage = async () => {
    const v = await $`gcloud run revisions list --service ${service}`
    const output = v.toString()

    if (output === 'Listed 0 items') process.exit(0)

    const [, ...revisions] = output.match(
        new RegExp(`${service}-[0-9]{5}-[a-z]{3}`, 'g')
    ) || [null]

    if (!revisions.length) process.exit(0)

    for (const revision of revisions)
        await $`gcloud run revisions delete ${revision} --quiet`

    await removeRevisionPage()
}

await removeRevisionPage()
