defmodule PdscServer.Repo do
  use Ecto.Repo,
    otp_app: :pdsc_server,
    adapter: Ecto.Adapters.Postgres
end
