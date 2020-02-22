defmodule PdscServerWeb.GoldController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Gold

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    gold = Tasas.list_gold()
    render(conn, "index.json", gold: gold)
  end

  def create(conn, %{"gold" => gold_params}) do
    with {:ok, %Gold{} = gold} <- Tasas.create_gold(gold_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.gold_path(conn, :show, gold))
      |> render("show.json", gold: gold)
    end
  end

  def show(conn, %{"id" => id}) do
    gold = Tasas.get_gold!(id)
    render(conn, "show.json", gold: gold)
  end

  def update(conn, %{"id" => id, "gold" => gold_params}) do
    gold = Tasas.get_gold!(id)

    with {:ok, %Gold{} = gold} <- Tasas.update_gold(gold, gold_params) do
      render(conn, "show.json", gold: gold)
    end
  end

  def delete(conn, %{"id" => id}) do
    gold = Tasas.get_gold!(id)

    with {:ok, %Gold{}} <- Tasas.delete_gold(gold) do
      send_resp(conn, :no_content, "")
    end
  end
end
