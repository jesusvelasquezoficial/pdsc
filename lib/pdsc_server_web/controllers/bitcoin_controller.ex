defmodule PdscServerWeb.BitcoinController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Bitcoin

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    bitcoin = Tasas.list_bitcoin()
    render(conn, "index.json", bitcoin: bitcoin)
  end

  def create(conn, %{"bitcoin" => bitcoin_params}) do
    with {:ok, %Bitcoin{} = bitcoin} <- Tasas.create_bitcoin(bitcoin_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.bitcoin_path(conn, :show, bitcoin))
      |> render("show.json", bitcoin: bitcoin)
    end
  end

  def show(conn, %{"id" => id}) do
    bitcoin = Tasas.get_bitcoin!(id)
    render(conn, "show.json", bitcoin: bitcoin)
  end

  def update(conn, %{"id" => id, "bitcoin" => bitcoin_params}) do
    bitcoin = Tasas.get_bitcoin!(id)

    with {:ok, %Bitcoin{} = bitcoin} <- Tasas.update_bitcoin(bitcoin, bitcoin_params) do
      render(conn, "show.json", bitcoin: bitcoin)
    end
  end

  def delete(conn, %{"id" => id}) do
    bitcoin = Tasas.get_bitcoin!(id)

    with {:ok, %Bitcoin{}} <- Tasas.delete_bitcoin(bitcoin) do
      send_resp(conn, :no_content, "")
    end
  end
end
