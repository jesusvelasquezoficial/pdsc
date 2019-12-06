defmodule PdscServerWeb.BcvControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Bcv

  @create_attrs %{
    dolar: "some dolar",
    euro: "some euro",
    fecha: "some fecha",
    lira: "some lira",
    rublo: "some rublo",
    yuan: "some yuan"
  }
  @update_attrs %{
    dolar: "some updated dolar",
    euro: "some updated euro",
    fecha: "some updated fecha",
    lira: "some updated lira",
    rublo: "some updated rublo",
    yuan: "some updated yuan"
  }
  @invalid_attrs %{dolar: nil, euro: nil, fecha: nil, lira: nil, rublo: nil, yuan: nil}

  def fixture(:bcv) do
    {:ok, bcv} = Tasas.create_bcv(@create_attrs)
    bcv
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all bcv", %{conn: conn} do
      conn = get(conn, Routes.bcv_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create bcv" do
    test "renders bcv when data is valid", %{conn: conn} do
      conn = post(conn, Routes.bcv_path(conn, :create), bcv: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.bcv_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some dolar",
               "euro" => "some euro",
               "fecha" => "some fecha",
               "lira" => "some lira",
               "rublo" => "some rublo",
               "yuan" => "some yuan"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.bcv_path(conn, :create), bcv: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update bcv" do
    setup [:create_bcv]

    test "renders bcv when data is valid", %{conn: conn, bcv: %Bcv{id: id} = bcv} do
      conn = put(conn, Routes.bcv_path(conn, :update, bcv), bcv: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.bcv_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some updated dolar",
               "euro" => "some updated euro",
               "fecha" => "some updated fecha",
               "lira" => "some updated lira",
               "rublo" => "some updated rublo",
               "yuan" => "some updated yuan"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, bcv: bcv} do
      conn = put(conn, Routes.bcv_path(conn, :update, bcv), bcv: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete bcv" do
    setup [:create_bcv]

    test "deletes chosen bcv", %{conn: conn, bcv: bcv} do
      conn = delete(conn, Routes.bcv_path(conn, :delete, bcv))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.bcv_path(conn, :show, bcv))
      end
    end
  end

  defp create_bcv(_) do
    bcv = fixture(:bcv)
    {:ok, bcv: bcv}
  end
end
