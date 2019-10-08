namespace :consul do
  desc "Runs tasks needed to upgrade to the latest version"
  task execute_release_tasks: ["settings:add_new_settings", "execute_release_1.1.0_tasks"]

  desc "Runs tasks needed to upgrade from 1.0.0 to 1.1.0"
  task "execute_release_1.1.0_tasks": [
    "budgets:set_original_heading_id"
  ]
end
